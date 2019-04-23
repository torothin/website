<!-- NavBar component -->


<template>
    <div>
       <img id='navButton' v-on:click='navShow = !navShow' src='../assets/images/menu_icon_white.png'/>

        <div id='navMenu' v-show='navShow' >
            <!-- loops over navList from app.vue and creates nav links -->
            <ul id='navList' v-on:click='navShow = !navShow'>
                <li class='navLi' v-for='(nav,item) in childNavData' :key='item'><a class="navLink" v-bind:href="'#'+nav.link">{{nav.name}}</a></li>
                
                <li class='navLi'><a class="navLink" target="_blank" rel="noopener noreferrer" href="https://www.github.com/torothin"><img src="../assets/images/GitHub_Logo_White.png" height="22px"></a></li>
                <li class='navLi'><a class="navLink" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brad-duvall-65949250"><img src="../assets/images/Logo-2CRev-28px-R.png" height="17px"></a></li>
            </ul>
        </div>

    </div>
</template>

<script>
// Imports

export default {
    components: {
        
    },
    data: function() {
        return {
            navShow: false,
            childNavData: [],
        }
    },
    methods: {

    },
    props: {
        navData: {
            type: Array,
            default: function() {
                return []
            }
        },
    },
    beforeMount: function() {
        this.childNavData = this.navData;
    },   

}
</script>

<style scoped>
#navButton {
    height: 40px;
    width: 40px;
    position: fixed;
    top: 25px;
    left: 10px;
    padding:5px;
    background-color: var(--info);
    border-radius: 7px;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 100;
}

#navButton:hover {
    background-color: var(--primary);
}

#navMenu {
    position: fixed;
    top: 75px;
    left: 10px;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 100;
}

#navList {
    padding:0px;
    list-style-type: none;
    margin: 0px;
    z-index: 100;
}

.navLi {
    margin: 0px;
    background-color: var(--info);
    
}

.navLink {
    text-align: left;
    color: var(--nav_font_main);
    list-style-type: none; 
    padding: 10px; 
    border: 1px solid var(--primary);
    margin: 0px;
    background-color: var(--info);
    text-decoration: none;
    width: 100%;
    display:block;
}
.navLink:hover {
    background-color: var(--nav_font_sec);
    text-decoration: none;
}

@media only screen and (max-width: 600px) {
    #navButton {
        height: 30px;
        width: 30px;
        top: 5px;
        left: 5px;
    }
    #navMenu {
        top: 60px;
        left: 5px;
        
    }
}
</style>
