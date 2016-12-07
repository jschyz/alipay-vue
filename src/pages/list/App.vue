<template>
  <!-- 已实现 -->
  <!--   标准的list列表 -->
  <!--   双行文字列表 -->
  <!--   图标＋单行文字（icon尺寸：21px * 21px） -->
  <!--   露出图片或图标 -->
  <!--   单双行 图文组合 -->

  <!-- 未实现 -->
  <!--   图标+两行文字 http://am-team.github.io/antui/docs/#图标＋两行文字 -->
  <!--   消息类       http://am-team.github.io/antui/docs/#消息类 -->
  <!--   纯信息展示    http://am-team.github.io/antui/docs/#纯信息展示-->
  <div id="page-list">
    <list header="表头" footer="表尾">
      <list-item title="标题文字"></list-item>
      <list-item title="标题文字" value="说明文字"></list-item>
      <list-item title="标题文字" reddot></list-item>
      <list-item title="标题文字" value="带链接" is-link to="/index.html"></list-item>
      <list-item class="twoline" title="标题文字" label="描述信息" is-link to="/index.html"></list-item>
      <list-item title="标题文字" value="icon是图片" is-link to="/index.html">
        <img slot="icon" src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png">
      </list-item>
      <list-item title="标题文字" is-link to="/index.html">
        <img slot="icon right" src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png">
      </list-item>
      <list-item class="twoline" title="标题文字" label="辅助标签" is-link to="/index.html">
        <img slot="icon right" src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png">
      </list-item>
      <list-item class="twoline" title="标题文字">
        <img slot="icon" src="https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png">
      </list-item>
    </list>
  </div>
</template>

<script>
  import List from '../../components/list/'
  import ListItem from '../../components/list-item/'

  export default {
    name: 'app',
    data () {
      return {
        selected: 0
      }
    },
    components: {
      List,
      ListItem
    }
  }
</script>
