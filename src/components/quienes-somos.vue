<template>
    <div id="QuienesSomos">
        <div class="container-sm p-5">
            <div class="container text-center">
                <div class="row justify-content-start">
                    <div class="col-sm">
                        <div class="body-text">
                            <h1 class="text-left h1"><span class="QuienesSomos"> ¿QUIÉNES SOMOS? </span></h1>
                            <p class="body-text text-black">{{ text }}</p>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="icon-body">
                            <img :src="image" class="img-fluid mx-auto d-block" alt="..." width="720">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['text', 'image'],
};
</script>
