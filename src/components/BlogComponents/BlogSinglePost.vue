<template>
    <div class="main-single-post">
        <div class="single-post-author">
            <v-card elevation="0" class="author-card">
                <div class="single-post-author-info">
                    <v-card-title class="single-post-author-name">
                        Nombres<br>
                        Apellidos<br>
                    </v-card-title>
                    <v-card-subtitle class="single-post-author-date">
                        Fecha de Publicación
                    </v-card-subtitle>
                </div>
                <div class="single-post-circle-author"></div>
            </v-card>
        </div>
        <div class="single-post-text">
            <div class="single-post-vertical-line"></div>
            <div class="single-post-text-card">
                <v-card elevation="0">
                    <v-card-item>
                        <v-img class="single-post-image" :src="require('@/assets/BG.jpg')"></v-img>
                    </v-card-item>
                    <v-card-title class="single-post-text-title"> Titulo del Post</v-card-title>
                    <v-card-text class="single-post-text-body">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum
                        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies
                        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                        fringilla
                        vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        Nullam dictum
                        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                        ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                        Quisque
                        rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
                        dui.
                        Etiam
                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
                        adipiscing
                        sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
                        ante
                        tincidunt
                        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                        eros
                        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                        consequat,
                        leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate
                        eleifend
                        sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem
                        in
                        dui. Cras
                        ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices
                        posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu
                        tortor,
                        suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante
                        arcu,
                        accumsan
                        a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum
                        nunc.
                        Nunc
                        nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis
                        vestibulum.
                        Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis
                        hendrerit
                        risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec
                        neque.
                        Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt
                        non,
                        euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus
                        turpis
                        vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum
                        primis in
                        faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue,
                        elit
                        erat
                        euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean
                        tellus
                        metus,
                        bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis.
                        Pellentesque
                        posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
                        sollicitudin
                        urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam
                        sagittis.
                        Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
                        velit
                        pede quis
                        nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce
                        id
                        purus. Ut
                        varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis
                    </v-card-text>
                </v-card>
            </div>
        </div>
        <div class="single-post-blog-buttons">
            <p class="single-post-p-spacer"></p>
            <v-container>
                <v-row>
                    <div class="single-post-blog-share-button pr-10">
                        <v-btn rounded="xl" color="#ffdf10"> Compartir </v-btn>
                    </div>
                    <v-btn size="small" class="single-post-social-network-button" target="_blank"
                        href="https://www.facebook.com/esamcochabambasucursal" icon="mdi-facebook">
                    </v-btn>
                    <v-btn size="small" class="single-post-social-network-button" target="_blank"
                        href="https://www.linkedin.com/company/esam-cochabamba/" icon="mdi-linkedin">
                    </v-btn>
                    <v-btn size="small" class="single-post-social-network-button" target="_blank"
                        href="https://www.instagram.com/esamcochabambasucursal/" icon="mdi-instagram">
                    </v-btn>
                </v-row>
            </v-container>
            <p class="single-post-p-spacer"></p>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
.main-single-post {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #112533;
}

.single-post-author {
    position: relative;
    width: 25%;
    height: 90%;
}

.single-post-author-name {
    position: relative;
    text-align: right;
    font-size: xx-large;
    font-weight: bolder;
}

.single-post-author-date {
    position: relative;
    text-align: right;
    font-size: x-large;
    font-weight: bolder;
}

.single-post-text {
    position: relative;
    width: 60%;
    height: 90%;
    margin: 0%;
    display: flex;
}

.single-post-vertical-line {
    position: relative;
    border-left: 3px solid;
    color: #b2a612;
    height: auto;
}

.single-post-text-card {
    position: relative;
}

.single-post-text-title {
    position: relative;
    font-size: xx-large;
}

.single-post-text-body {
    position: relative;
    font-size: large;
}

.single-post-image {
    position: relative;
    width: 100%;
    height: auto;
}

.author-card {
    position: relative;
    display: flex;
    padding-right: 5%;
    right: -20%;
}

.single-post-author-info {
    position: relative;
}

.single-post-circle-author {
    position: relative;
    height: 5rem;
    width: 5rem;
    background-color: #112533;
    border-radius: 50%;
}

.single-post-p-spacer {
    height: 2.5rem;
    top: 100%;
}

.single-post-blog-buttons {
    position: absolute;
    top: 100%;
    left: 32%;
}

.single-post-social-network-button {
    position: relative;
    left: 8%;
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    background-color: #112533;
}
.single-post-blog-share-button {
    position: relative;
    left: 10%;
    bottom: 65%;
    color: #112533;
}
</style>