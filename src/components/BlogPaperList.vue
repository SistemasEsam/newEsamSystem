<template>
    <div>
        <div class="last-paper">
            <v-row>
                <p class="last-paper-title">
                    ÚLTIMO<br>
                    ARTÍCULO<br>
                    PUBLICADO<br>
                </p>
                <v-card class="main-card">
                    <div class="last-paper-image">
                        <v-avatar size="250" rounded="0">
                            <v-img :src="require('@/assets/AboutUs.jpg')"></v-img>
                        </v-avatar>
                    </div>
                    <div class="vertical-line-last-paper">
                    </div>
                    <div class="last-paper-subtitle">
                        <div class="circle-author"></div>
                        <div class="last-paper-author-name">
                            <v-card-subtitle>
                                Nombre del Autor
                            </v-card-subtitle>
                        </div>
                    </div>
                    <div class="last-paper-text">
                        <v-card-title> Nombre relevante del Paper</v-card-title>
                        <v-card-text> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                            dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec
                            quam
                            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </v-card-text>
                    </div>

                </v-card>
            </v-row>

        </div>
        <div class="list-papers">

            <v-container class="container-papers">
                <v-row>
                    <v-col>
                        <v-card class="list-card">
                            <v-img :src="require('@/assets/AboutUs.jpg')">
                            </v-img>
                            <v-card-title>
                                Paper #1
                            </v-card-title>
                            <div class="vertical-line-list-paper">
                            </div>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean
                                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </v-card-text>
                            <div class="list-author">
                                <div class="circle-list-author"></div>
                                <v-card-subtitle class="list-paper-author-name">
                                    Nombre del Autor
                                </v-card-subtitle>
                            </div>
                        </v-card>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-card class="list-card">
                            <v-img :src="require('@/assets/AboutUs.jpg')">
                            </v-img>
                            <v-card-title>
                                Paper #2
                            </v-card-title>
                            <div class="vertical-line-list-paper">
                            </div>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean
                                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </v-card-text>
                            <div class="list-author">
                                <div class="circle-list-author"></div>
                                <v-card-subtitle class="list-paper-author-name">
                                    Nombre del Autor
                                </v-card-subtitle>
                            </div>
                        </v-card>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-card class="list-card">
                            <v-img :src="require('@/assets/AboutUs.jpg')">
                            </v-img>
                            <v-card-title>
                                Paper #3
                            </v-card-title>
                            <div class="vertical-line-list-paper">
                            </div>
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean
                                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </v-card-text>
                            <div class="list-author">
                                <div class="circle-list-author"></div>
                                <v-card-subtitle class="list-paper-author-name">
                                    Nombre del Autor
                                </v-card-subtitle>
                            </div>
                        </v-card>
                    </v-col>

                </v-row>
            </v-container>

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.last-paper {
    position: absolute;
}

.last-paper-title {
    position: relative;
    left: 10%;
    text-align: right;
    font-weight: 900;
    font-size: xx-large;
    color: #112533;
    margin-top: 5%;
    color: #112533;
}

.last-paper-subtitle {
    position: relative;
    left: 5%;
    float: left;
    top: 80%;
    width: 50%;
    height: 10%;
    color: #112533;
}

.main-card {
    left: 12%;
    width: 65%;
    margin-top: 5%;
}

.last-paper-image {
    position: relative;
    left: 5%;
    width: 270px;
    float: left;
}

.last-paper-text {
    top: 0%;
    float: left;
    position: relative;
    left: 5%;
    width: 50%;
    height: auto;

}

.vertical-line-last-paper {
    position: relative;
    float: left;
    top: 15%;
    bottom: 15%;
    left: 5%;
    height: 180px;
    border-left: 3px solid;
    color: #b2a612
}

.circle-author {
    position: relative;
    float: left;
    top: -100%;
    height: 30px;
    width: 30px;
    background-color: #112533;
    border-radius: 50%;
    margin: 10px;
}

.last-paper-author-name {
    position: relative;
    float: left;
    bottom: 40%;
}

.list-papers {
    position: absolute;
    top: 50%;
    left: 10%;
}

.container-papers {
    position: relative;
}

.list-card {
    width: 350px;
    height: 450px;
    margin-left: 10% ;
}

.vertical-line-list-paper {
    position: relative;
    float: left;
    top: -11%;
    bottom: 15%;
    left: 0%;
    height: 250px;
    border-left: 3px solid;
    color: #b2a612
}
.circle-list-author {
    position: relative;
    float: left;
    left: 2%;
    margin-top: -1%;
    height: 30px;
    width: 30px;
    background-color: #112533;
    border-radius: 50%;
}
.list-author{
    position: relative;
}
.list-paper-author-name{
    position: relative;
    float: left;
    left: 3%;    
}
</style>
