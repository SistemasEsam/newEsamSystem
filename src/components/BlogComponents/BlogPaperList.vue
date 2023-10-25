<template>
    <div class="main-page">
        <div class="last-paper">
            <div class="last-paper-title">
                ÚLTIMO<br>
                ARTÍCULO<br>
                PUBLICADO<br>
            </div>
                <img class="last-paper-image" :src="require('@/assets/AboutUs.jpg')">
            <div class="last-paper-text">
                <div class="vertical-line-last-paper">
                </div>
                <div class="last-paper-name"> Nombre relevante del Paper</div>
                <div class="last-paper-resume"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec
                    quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
                <div class="circle-author"></div>
                <div class="last-paper-author-name">
                        Nombre del Autor
                </div>

            </div>
        </div>
        <div class="grid-papers">
            <div class="grid-single-paper">
                <img class="grid-single-image" :src="require('@/assets/AboutUs.jpg')">
                <h2> Paper #1</h2>
                <div class="vertical-line-list-paper"></div>
                <div class="grid-single-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>
                <div class="circle-list-author"></div>
                <div class="grid-paper-author-name"> Nombre del Autor</div>
            </div>
            <div class="grid-single-paper">
                <img class="grid-single-image" :src="require('@/assets/AboutUs.jpg')">
                <h2> Paper #2</h2>
                <div class="vertical-line-list-paper"></div>
                <div class="grid-single-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>
                <div class="circle-list-author"></div>
                <div class="grid-paper-author-name"> Nombre del Autor</div>

            </div>
            <div class="grid-single-paper">
                <img class="grid-single-image" :src="require('@/assets/AboutUs.jpg')">
                <h2> Paper #3</h2>
                <div class="vertical-line-list-paper"></div>
                <div class="grid-single-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                    dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>
                <div class="circle-list-author"></div>
                <div class="grid-paper-author-name"> Nombre del Autor</div>
            </div>
            <div class="spacer-paper"></div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.main-page {
    position: absolute;
    width: 100%;
    height: 100%;

}

.last-paper {
    position: relative;
    width: 80%;
    left: 8%;
    right: 8%;
    top: 5%;
    height: 300px;
    display: flex;
    flex-direction: row ;
    vertical-align: middle;
    color: #112533;
}
.last-paper-title {
    position: relative;
    font-size: 300%;
    font-weight: 900;
    text-align: right;

}

.last-paper-image {
    position: relative;
    width: 350px;
    height: fit-content;
    left: 4%;
}
.last-paper-resume{
    position: relative;
    left: 2%;
}

.last-paper-text {
    position: relative;
    font-size: 0.95rem;
    left: 4%;
}
.last-paper-name{
    position: relative;
    left: 2%;
    font-size: xx-large;
    font-weight: bold;
    letter-spacing: 0.1em;
}

.vertical-line-last-paper {
    position: relative;
    float: left;
    top: 0%;
    bottom: 15%;
    left: 0%;
    height: 78%;
    border-left: 4px solid;
    color: #b2a612
}

.circle-author {
    position: relative;
    width: 4.5rem;
    height: 4.5rem;
    background-color: #112533;
    float: left;
    top: 10%;
    left: 2%;

}

.last-paper-author-name {
    position: relative;
    left: 4%;
    font-size: 1.2rem;
    font-weight: bold;
    float: left;
    top: 17%;

}

.vertical-line-list-paper {
    position: relative;
    left: 0%;
    height: 140px;
    border-left: 4px solid;
    color: #b2a612
}

.circle-list-author {
    position: relative;
    height: 50px;
    width: 50px;
    background-color: #112533;
    border-radius: 50%;
    top: -33%;
    left: 5%;
}


.grid-paper-author-name {
    position: relative;
    top: -41%;
    left: 20%;
    font-weight: bold;

}

.grid-papers {
    position: relative;
    top: 15%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5%;
    justify-content: space-evenly;
    margin: auto;
    width: 50%;
    color: #112533;
}

.grid-single-paper {
    position: relative;
    border: 1px solid lightgray;
    width: 400px;
    height: 450px;
    margin: 0%;
    padding: 0%;
}

.grid-single-image {
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin-top: -23%;
    margin-bottom: -23%;
}

.grid-single-text {
    position: relative;
    font-size: smaller;
    width: 90%;
    height: 90px;
    top: -32%;
    left: 5%;
}

.spacer-paper {
    position: relative;
    height: 100px;
    bottom: 0%;
}
</style>
