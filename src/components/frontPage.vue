<!-- blank Vue component -->


<template>
   <div id='frontPageContainer'>
     <div id='frontPage'>
        <div id='frontPageImage'></div>
        <div id='frontPageText'>
          
          Lost in the woods . . .

        </div>
        <div id='bottomFrontPageText'>

            Way out ...
            <div id='bottomFrontPageImage'>
              <img src="src/assets/images/downArrowWhite.png" style='height: 60px; width: 100px'>

            </div>
    
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

#frontPageContainer {
  height: 100vh; 
}

#frontPage {
    top: 0px;
  
    height: 100vh; 
    width:100%;
    background-color:black;
    position: absolute;
    /* z-index: 299;  */
}

#frontPageImage {
  /* top: 0px;
  right: 0px; */
  position: absolute;
  /* z-index: 300;  */
  width:100%;

  background-image: url(../assets/images/IMG_2417.jpg);
  opacity: 0.6;
  height: 100%;
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: center center;
}

#frontPageText {
    position: absolute;
    top: 15px;
    text-align: center;
    height: 100px;
    width: 100%;
    color: white;
    /* z-index: 301; */
    font-size: 25px;
}

#bottomFrontPageText {
    position: absolute;
    bottom: 0px;
    text-align: center;
    height: 100px;
    width: 100%;
    color: white;
    /* z-index: 301; */
    font-size: 25px;
}

@media (orientation: portrait) {
    #frontPageImage {
        background-image: url(../assets/images/IMG_2417B.png);
        background-size: 150%;

    }
}

@media only screen and (max-width: 770px)
{
    #frontPageImage {
        background-image: url(../assets/images/IMG_2417B.png);
        background-size: 180%;
    
    }
}

</style>
