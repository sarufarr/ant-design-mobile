import React from 'react'
import { Tabs, Badge } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='基本用法' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits'>
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title='蔬菜' key='vegetables'>
            西红柿
          </Tabs.Tab>
          <Tabs.Tab title='动物' key='animals'>
            蚂蚁
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title='配合 Badge 使用' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits'>
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title='蔬菜' key='vegetables'>
            西红柿
          </Tabs.Tab>
          <Tabs.Tab title={<Badge content='1'>动物</Badge>} key='animals'>
            蚂蚁
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title='超长自动滚动' padding='0'>
        <Tabs defaultActiveKey='1'>
          <Tabs.Tab title='Espresso' key='1'>
            1
          </Tabs.Tab>
          <Tabs.Tab title='Coffee Latte' key='2'>
            2
          </Tabs.Tab>
          <Tabs.Tab title='Cappuccino' key='3'>
            3
          </Tabs.Tab>
          <Tabs.Tab title='Americano' key='4'>
            4
          </Tabs.Tab>
          <Tabs.Tab title='Flat White' key='5'>
            5
          </Tabs.Tab>
          <Tabs.Tab title='Caramel Macchiato' key='6'>
            6
          </Tabs.Tab>
          <Tabs.Tab title='Cafe Mocha' key='7'>
            7
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title='没有内容区' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits' />
          <Tabs.Tab title='蔬菜' key='vegetables' />
          <Tabs.Tab title='动物' key='animals' />
        </Tabs>
      </DemoBlock>

      <DemoBlock title='禁用' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits' />
          <Tabs.Tab title='蔬菜' key='vegetables' />
          <Tabs.Tab title='动物' key='animals' disabled />
        </Tabs>
      </DemoBlock>

      <DemoBlock title='自定义当前激活的下划线长度' padding='0'>
        <Tabs
          activeLineMode='fixed'
          style={{
            '--fixed-active-line-width': '20px',
          }}
        >
          <Tabs.Tab title='超长的tab111' key='1'>
            1
          </Tabs.Tab>
          <Tabs.Tab title='超长的tab2' key='2'>
            2
          </Tabs.Tab>
          <Tabs.Tab title='超长的tab333' key='3'>
            3
          </Tabs.Tab>
          <Tabs.Tab title='超长的tab4444' key='4'>
            4
          </Tabs.Tab>
          <Tabs.Tab title='超长的tab55555' key='5'>
            5
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title='自定义选项卡头的文字大小' padding='0'>
        <Tabs
          style={{
            '--title-font-size': '13px',
          }}
        >
          <Tabs.Tab title='水果' key='fruits' />
          <Tabs.Tab title='蔬菜' key='vegetables' />
          <Tabs.Tab title='动物' key='animals' />
        </Tabs>
      </DemoBlock>
    </>
  )
}
