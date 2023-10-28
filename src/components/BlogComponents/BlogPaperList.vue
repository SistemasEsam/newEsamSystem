<template>
    <div class="main-page">
        <v-card elevation="0" class="last-paper">
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
                <div class="last-paper-resume"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget
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
        </v-card>
        <div class="grid-cards">
            <ul class="card-list">
                <li v-for="(card, index) in cards" :key="index">
                    <v-card elevation="0" class="grid-single-paper">
                        <img class="grid-single-image" :src="require('@/assets/AboutUs.jpg')">
                        <div class="grid-text-line">
                            <div class="grid-vertical-line-list-paper"></div>
                            <h2 class="grid-text-title"> Paper {{ index + 1 }}</h2>
                            <div class="grid-text">
                                <div class="grid-single-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean
                                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus.
                                </div>
                                <div class="grid-circle-author">
                                    <div class="circle-list-author"></div>
                                    <div class="grid-paper-author-name"> Nombre del Autor</div>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cards: [1, 2, 3, 4, 5],
            numberOfColumns: 3,
        }
    },
    computed: {
        gridStyle() {
            if (window.innerWidth > 1600) { this.numberOfColumns = 3 }
            else { this.numberOfColumns = 2 }
            return {
                gridTemplateColumns: `repeat(${this.numberOfColumns}, minmax(100px, 1fr))`
            }
        }
    },
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
    flex-direction: row;
    vertical-align: middle;
    color: #112533;
    margin-bottom: 5rem;
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

.last-paper-resume {
    position: relative;
    left: 2%;
}

.last-paper-text {
    position: relative;
    font-size: 0.95rem;
    left: 4%;
}

.last-paper-name {
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

.grid-text {
    position: relative;
    left: 1rem;
    width: 95%;
}

.circle-author {
    position: relative;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: #112533;
    float: left;
    left: 2%;
}

.grid-cards {
    position: relative;
    width: 70%;
    margin: auto;
}

.card-list {
    display: grid;
    row-gap: 5rem;
    grid-auto-rows: 27rem;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    list-style-type: none;
}

.grid-single-paper {
    position: relative;
    width: 25rem;
    height: 28rem;
    border-radius: 0%;
}

.grid-single-image {
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin-top: -23%;
    margin-bottom: -28%;
}

.grid-text-line {
    position: relative;
    width: 100%;
    height: 10rem;
    top: 0.9rem;
}

.grid-single-text {
    position: relative;
    font-size: smaller;
}

.spacer-paper {
    position: relative;
    height: 100px;
    bottom: 0%;
}

.grid-paper-author-name {
    position: relative;
    font-weight: bold;
    left: 1rem;
    top: 0.9rem;
}

.circle-list-author {
    position: relative;
    height: 3.5rem;
    width: 3.5rem;
    background-color: #112533;
    border-radius: 50%;
    float: left;
}

.grid-vertical-line-list-paper {
    position: relative;
    height: 115%;
    border-left: 4px solid;
    color: #b2a612;
    float: left;
}

.grid-text-title {
    position: relative;
    left: 1rem;
}
.grid-circle-author{
    position: relative;
    top: 0.5rem;
}
</style>