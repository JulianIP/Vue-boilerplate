<template>
    <div class="page-container">
        <md-app md-scrollbar md-waterfall md-mode="fixed" class="page">
            <md-app-toolbar class="white-background">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                            <md-icon class="black-font">menu</md-icon>
                        </md-button>
                        <span class="md-title black-font height30"><img class="logo" src="./assets/imgs/logo.png"></span>
                    </div>
                </div>
            </md-app-toolbar>
            <md-app-drawer class="sidebar" :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
                <md-list>
                    <md-list-item v-for="(item,index) in links" :key="index" @click="menuVisible = false" :to="item.path">
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">{{item.name}}</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content class="height-auto min-height-100 grey-background">
                <router-view></router-view>
            </md-app-content>
        </md-app> 
    </div>
</template>

<script>

export default { 
    data() {
        return {
            menuVisible: false,
            title: 'Responsive City',
            links: this.$root.$data.routes
        }
    }
}
</script>

<style lang="scss" scoped>  
  @import "assets/sass/app.scss"
</style>



