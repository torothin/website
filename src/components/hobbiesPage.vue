<!-- Hobbies Vue component -->


<template>
    <div class='componentCont'>
        
        <div class="jumbotron">
     
            <h1>Hobbies</h1>
            <hr class="my-4">
            
            <p class="lead">Martial Arts</p>
            <p>All of my life I have wanted to do some form of martial art.  Around 2014 I finally decided to give it a try. My wife, at the time, and I decided to try a self defense class that was designed around using Wing Chun (see IP Man) as a base. Three years later and I get my first Black Belt equivalent.</p>
            <p>While learning Wing Chun I was introduced to Muay Thai (Thai Boxing) and fell in love. The sport provided a wonderful workout and was very challenging. I moved to Alpha Martial Arts where I learn from Kru Alberto Ramirez at Chaisai Muay Thai where I currently hold a green sash. I also study a bit of Escrima and would like to try Kenjitsu and BJJ in the future.</p>
            <p class="lead">Hiking and Camping</p>
            <p>A summer hobby that I enjoy is to go hiking. We regularly head out toward Darrington, WA to explore the many hiking trails. Our most difficult hike to date was the hike to Camp Muir on Mt Rainier.  A few buddies and I regularly go camping in the off seasons around Roslyn and Lake Cle Elum.</p>
            <p class="lead">Gaming</p>
            <p>I spend some of my free time playing games on my PC. I enjoy MMORPGs and RPGs such as World of Warcraft and Skyrim. </p>
            <p class="lead">Shooting</p>
            <p>Several years ago I started taking gun safety classes.  I started with the basics of a 101 class and have moved to more advanced classes.  Prior to working at Guidewire, I worked at a local gun range where I learned a great deal about gun safety.  I am slowly working up to competing in some local shooting competitions </p>
            <div class="bottomImageContainer">
                <img class="imageRight" alt="dog" src="../assets/images/IMG_1151.jpg">
                </div>

            </div>
 
        <!-- <div class="container" style="text-align: center; padding: 50px; padding-top: 0px" >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LzL3onF5lXw" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div> -->

        <div class="iframe-container">
            <iframe src="https://www.youtube.com/embed/LzL3onF5lXw" allowfullscreen></iframe>
            </div>


<!-- Images  --------------------------------------------------------- -->

        <div id='imageBlock'>
            <ul>
                <li v-for='(image,index) in images' :key='index' v-on:click='toggleModal(index)'>
                    <div class="card" >
                        <div class="card-body">
                            <img 
                                class="card-img" 
                                v-bind:alt='image.footer' 
                                v-bind:id='index'
                                v-bind:src='image.location'/>
                            </div>
                        <div class="card-footer">{{image.footer}}</div>
                        </div>
                    </li>
                </ul>
            </div>

<!-- popup for image modal -->
        <div id="myModal" class="modal" v-bind:style='modalDisplay'>
            <div class="modal-backdrop">
                <div class="modal-header">
                    <span class="close" v-on:click='toggleModal(0)'>&times;</span>
                    </div>

                <div class="modal-body">
                    <img class="modal-content" v-bind:src='currentImageSrc'/>
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
            modalDisplay: {
                display: 'none',
                },
            currentImageSrc: '',
            images: [
                {
                    footer: 'Twin Falls, WA',
                    location: 'src/assets/images/IMG_0407.jpg',
                },
                {
                    footer: 'Stillaguamish River, Lime Kiln Trail, WA',
                    location: 'src/assets/images/IMG_0397.jpg'
                },
                {
                    footer: 'Stillaguamish River, Lime Kiln Trail, WA',
                    location: 'src/assets/images/IMG_0269.jpg'
                },
                {
                    footer: 'Bridal Veil Falls Trail, WA',
                    location: 'src/assets/images/IMG_2145.jpg'
                },
                {
                    footer: 'Mt. Si, Little Si Trail, WA',
                    location: 'src/assets/images/IMG_0467.jpg'
                },
                {
                    footer: 'Lake Serene, WA',
                    location: 'src/assets/images/IMG_2196.jpg'
                },
                {
                    footer: 'Cooper River, WA',
                    location: 'src/assets/images/IMG_2417.jpg'
                },
                {
                    footer: 'Cooper River, WA',
                    location: 'src/assets/images/IMG_2425.jpg'
                },
                // {
                //     footer: '',
                //     location: 'src/assets/images/'
                // },
            ],
            
        }
    },
    methods: {
        toggleModal: function(id) {
            if(this.modalDisplay.display == 'block')
            {
                this.modalDisplay.display = 'none';
            }
            else
            {
                this.modalDisplay.display = 'block'
                this.currentImageSrc = this.images[id].location;
            }
        },

    }
}
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    max-width: 300px;
    flex-grow: 1;
    flex-basis: 300px;
    padding: 5px;
    margin: 20px auto;
    
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    z-index: 1050;
    overflow: hidden;
    outline: 0; 
    height: 100%; 
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: scroll; 
}

.modal-content {
    width: 60%;
    margin: auto;
    pointer-events: auto;
    background-color: #fff;
    -webkit-background-clip: padding-box;
            background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    outline: 0; 
}

.modal-body {
    padding: 1rem; 
    max-height: calc(100vh - 50px);
    overflow-y: auto;
}

.modal-header {
    border-bottom: 0px solid #e9ecef;
}

.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    width: 90%;
    margin: 10px auto;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
   
.iframe-container iframe {
     border: 0;
     height: 100%;
     left: 0;
     position: absolute;
     top: 0;
     width: 100%;

}
   
/* 4x3 Aspect Ratio */
.iframe-container-4x3 {
    padding-top: 75%;
}


.card {
    background-color: var(--info);
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     
}

.card-footer {
    color: var(--nav_font_main);
    text-align: center;
}
</style>
