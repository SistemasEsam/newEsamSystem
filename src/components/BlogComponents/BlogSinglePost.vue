<template>
    <div class="single-blog-main-page">
        <div class="author-date">
                <div class="single-blog-author-name">
                    <h2>Nombre Autor</h2>
                    <h2> Apellido Autor</h2>
                    <h3 class="single-blog-date"> Fecha de Publicación</h3>
                </div>
                <div class="circle-author"></div>
        </div>
        <div class="vertical-line">
            <img class="single-blog-image" :src="require('@/assets/esamlogo.png')" />
            <H1 class="single-blog-title"> Título del Post </H1>
            <div class="single-blog-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus
                eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
                Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce
                vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam
                accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam
                pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed
                aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent
                adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium
                libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet,
                nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in
                justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor,
                tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae,
                posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae
                tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit
                erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean
                tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In
                turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue
                blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a,
                suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero
                volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor.
                Maecenas vestibulum mollis
            </div>

        </div>
        <div class="blog-buttons">
            <p class="p-spacer"></p>
            <v-container>
                <v-row>
                    <div class="blog-share-button pr-10">
                        <v-btn rounded="xl" color="#ffdf10"> Compartir </v-btn>
                    </div>
                    <v-btn size="small" class="social-network-button" target="_blank"
                        href="https://www.facebook.com/esamcochabambasucursal" icon="mdi-facebook">
                    </v-btn>
                    <v-btn size="small" class="social-network-button" target="_blank"
                        href="https://www.linkedin.com/company/esam-cochabamba/" icon="mdi-linkedin">
                    </v-btn>
                    <v-btn size="small" class="social-network-button" target="_blank"
                        href="https://www.instagram.com/esamcochabambasucursal/" icon="mdi-instagram">
                    </v-btn>
                </v-row>
            </v-container>
            <p class="p-spacer"></p>
        </div>
    </div>
</template>





<script>
import NewNavBarVue from '@/components/NewNavBar.vue';
import LitleNavBar from '@/components/LitleNavBar.vue';
import NewFront from '@/components/NewFront.vue';

export default {
    components: {
        NewNavBarVue,
        LitleNavBar,
        NewFront
    }
}
</script>
<style>
.single-blog-main-page {
    position: absolute;
    display: inline;
}

.vertical-line {
    position: relative;
    border-left: 3px solid;
    color: #b2a612;
    height: auto;
    width: 60%;
    left: 25%;
}

.single-blog-text {
    position: relative;
    left: 5%;
    right: 10%;
    color: black;
}

.author-date {
    position: relative;
    text-align: right;
    color: #112533;
    width: 20%;
    height: auto;
    float: left;
    left: 10%;
}

.circle-author {
    position: relative;
    height: 100px;
    width: 100px;
    background-color: #112533;
    border-radius: 50%;
    left: 5%;
    float: left;
}
.single-blog-author-name{
    position: relative;
    float: left;
}

.single-blog-title {
    position: relative;
    left: 5%;
    color: #112533;
}

.single-blog-date {
    position: relative;
    color: lightgray;
}

.blog-share-button {
    position: relative;
    left: 10%;
    bottom: 65%;
    color: #112533;
}

.single-blog-image {
    position: relative;
    left: 5%;
    height: 300px;
}

.p-spacer {
    height: 100px;
}

.blog-buttons {
    position: relative;
    top: 1000%;
    left: 26%;
}

.social-network-button {
    position: relative;
    left:8%;
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    background-color: #112533;
}
</style>