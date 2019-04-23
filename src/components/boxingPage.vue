<!-- blank Vue component -->


<template>
    <div class='componentCont' id='boxingPageContainer'>
       
    <div class="jumbotron">
                
            <h1>Boxing App</h1>
            <p></p>
            
            <hr class="my-4">
            <div class="rightImageContainer">
                <img class="imageRight" src="../assets/images/Boxing_App_Image.png"> 
            </div>
            <p>An idea came to me in my Muay Thai class one day.  What if I had an app that called out random combinations for me on a timer.  I thought to myself, “I can build that”.  Initially, the app was going to be for mobile devices.  I had tinkered around with swift in the past, so I started to think iOS first then maybe android.  I realized that I needed to be sure that I wasn’t the only one that might use something like this because jumping straight to mobile might be a bigger leap than necessary.  I looked at JavaScript and realized I could build it using JavaScript.</p>
            <p>I implementing some feedback I received from classmates and the head instructor for my class.  The experience was very useful in learning front end development because every browser handles the web app a little differently.  I plan to implement several features and then rebuild it for mobile devices.</p>
            <div class="bottomImageContainer">
                <img class="imageRight" src="../assets/images/Boxing_App_Image.png"> 
            </div>
            <div class='linkCont'>
                <a target="_blank" rel="noopener noreferrer" href="https://torothin.github.io/torothin.boxing.github.io/">Boxing App Link (opens in a new tab)</a>
            </div>
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

        }
    },
    methods: {

    }
}
</script>

<style scoped>
/* .jumbotron {
    width: 90%;
}
#imageContainer {
    padding:0px;
    width: 40%;
    margin-top: 0;
} */
</style>
