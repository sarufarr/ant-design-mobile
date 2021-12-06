import React, { FC, ReactNode, useState } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import { useUnmountedRef } from 'ahooks'
import Mask from '../mask'
import { Action, DialogActionButton } from './dialog-action-button'
import Image from '../image'
import Space from '../space'
import { GetContainer } from '../../utils/render-to-container'
import {
  PropagationEvent,
  withStopPropagation,
} from '../../utils/with-stop-propagation'
import AutoCenter from '../auto-center'
import { useSpring, animated } from '@react-spring/web'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-dialog`

export type DialogProps = {
  afterClose?: () => void
  image?: string
  header?: ReactNode
  // waitImageLoad?: boolean
  title?: ReactNode
  content?: ReactNode
  actions?: (Action | Action[])[]
  onAction?: (action: Action, index: number) => void | Promise<void>
  closeOnAction?: boolean
  onClose?: () => void
  closeOnMaskClick?: boolean
  visible?: boolean
  getContainer?: GetContainer
  bodyStyle?: React.CSSProperties
  bodyClassName?: string
  maskStyle?: React.CSSProperties
  maskClassName?: string
  stopPropagation?: PropagationEvent[]
} & NativeProps

const defaultProps = {
  visible: false,
  actions: [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  stopPropagation: ['click'],
}

export const Dialog: FC<DialogProps> = p => {
  const props = mergeProps(defaultProps, p)

  const unmountedRef = useUnmountedRef()
  const style = useSpring({
    scale: props.visible ? 1 : 0.8,
    opacity: props.visible ? 1 : 0,
    config: {
      mass: 1,
      tension: 200,
      friction: 30,
      clamp: true,
    },
    onStart: () => {
      setActive(true)
    },
    onRest: () => {
      if (unmountedRef.current) return
      setActive(props.visible)
      if (!props.visible) {
        props.afterClose?.()
      }
    },
  })

  const [active, setActive] = useState(props.visible)

  return withStopPropagation(
    props.stopPropagation,
    withNativeProps(
      props,
      <div
        className={classPrefix}
        style={{
          display: active ? 'unset' : 'none',
        }}
      >
        <Mask
          visible={props.visible}
          getContainer={props.getContainer}
          onMaskClick={props.closeOnMaskClick ? props.onClose : undefined}
          style={props.maskStyle}
          className={classNames(`${classPrefix}-mask`, props.maskClassName)}
        />
        <div
          className={`${classPrefix}-wrap`}
          style={{
            pointerEvents: props.visible ? 'unset' : 'none',
          }}
        >
          <animated.div
            style={{
              ...style,
            }}
            onClick={e => e.stopPropagation()}
            className={`${classPrefix}-main`}
          >
            {!!props.image && (
              <Image src={props.image} alt='dialog header image' width='100%' />
            )}
            <div
              style={props.bodyStyle}
              className={classNames(`${classPrefix}-body`, props.bodyClassName)}
            >
              <Space direction='vertical' block>
                {!!props.header && (
                  <div className={`${classPrefix}-body-header-wrapper`}>
                    <div className={`${classPrefix}-body-header`}>
                      {props.header}
                    </div>
                  </div>
                )}
                {!!props.title && (
                  <div className={`${classPrefix}-body-title`}>
                    {props.title}
                  </div>
                )}
                {!!props.content && (
                  <div className={`${classPrefix}-body-content`}>
                    {typeof props.content === 'string' ? (
                      <AutoCenter>{props.content}</AutoCenter>
                    ) : (
                      props.content
                    )}
                  </div>
                )}
              </Space>
            </div>
            <div className={`${classPrefix}-footer`}>
              {props.actions.map((row, index) => {
                const actions = Array.isArray(row) ? row : [row]
                return (
                  <div className={`${classPrefix}-action-row`} key={index}>
                    {actions.map((action, index) => (
                      <DialogActionButton
                        key={action.key}
                        action={action}
                        onAction={async () => {
                          await Promise.all([
                            action.onClick?.(),
                            props.onAction?.(action, index),
                          ])
                          if (props.closeOnAction) {
                            props.onClose?.()
                          }
                        }}
                      />
                    ))}
                  </div>
                )
              })}
            </div>
          </animated.div>
        </div>
      </div>
    )
  )
}
