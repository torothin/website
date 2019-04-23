<!-- Education History Vue component -->


<template>
    <div class='componentCont'>
        <div class="jumbotron">
            <h1>My Education</h1>
            <hr class="my-4">
            <p class="lead">UW Bothell (2017-2018)</p>
            
            <p>I obtained a <b>Graduate Certificate in Software Design & Development</b>, in 2018, where I learned software development in C++. During my time in this program I learned about object-oriented programming, data structures and algorithms. I also learn about various project management styles such as Waterfall, Kanban, and Agile software development.  While in this program I completed 12 projects on-time and per specification.  
            </p>

            <p>Prior to attending UW Bothell, I began my programming journey by taking online courses.  I took courses on Udemy, EDX.org and Coursera.  These courses helped prepare me for entrance into the Graduate Certificate program.
            </p>

            <button class="btn" id='classListBtn' v-on:click='toggleClasslist'>Class List</button>
            
            <div class="div-shadowed" id="classList" style="display: none;">
            <p></p>
            
            <ul class="classUL" > Grad Cert Courses
                <li>CSS 501 Data Structures and Object-Oriented Programming I</li>
                <li>CSS 502 Data Structures and Object-Oriented Programming II</li>
                <li>CSS 503 Systems Programming</li>
                <li>CSS 506 Software Development Processes</li>
                <li>CSS 507 Software Modeling Techniques</li>
                <li>CSS 508 Software Testing and Quality</li>
            </ul>

            <ul class="classUL"> Online Courses
                <li>Vue JS Tutorial</li>
                <li>The Complete JavaScript Course 2018: Build Real Projects</li>
                <li>HKUSTx COMP102.2x Introduction to Java Programming - Part 2</li>
                <li>HKUSTx COMP102.1x Introduction to Java Programming - Part 1</li>
                <li>MITx 6.00.1x Introduction to Computer Science and Programming Using Python</li>
                <li>Solve 100 Python Exercises to Boost your Python Skills</li>
                <li>The Python Mega Course: Build 10 Real World Applications</li>
            </ul>
            <p></p>
            </div>
            <p></p>
            <p class="lead">UW Seattle (2009-2011)</p>
            
            <p>After transferring to UW Seattle, I earned a <b>BS in Material Science and Engineering</b> in 2011. While at UW, I learned about metal alloys, polymers and composite systems. I took courses in material testing to gain insights into the strengths and weakness of various materials and their applications. I also learned how to research academic topics and and write research papers. My undergrad research capstone was the development of a Copper Nickel Electrodeposition method using nano-laminate technology. The method was used by a MSE Graduate to study nano-laminate material properties.
            </p>

            <p class="lead">Northgate CC (2006-2009)</p>
            
            <p>After leaving the Navy, I started my education at North Seattle Community College. I earned an <b>Associate of Science</b>, in 2009, as part of the transfer requirements. My class load included Physics, Chemistry, Calculus and Thermodynamics.</p>
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
        toggleClasslist: function() {
            if(classList.style.display == 'none')
            {
                classList.style.display = 'block';
            }
            else
            {
                classList.style.display = 'none'
            }
        },
    }
}
</script>

<style scoped>

#classList {
    background-color: var(--success);
    
    padding: 10px;
    margin-top: 10px;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: left;
    width: 100%;
}

.classUL {
    color: var(--info);
}

#classListBtn {
    background-color: var(--info);
    color: var(--success);
}



</style>
