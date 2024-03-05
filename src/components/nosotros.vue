<template>
    <div id="nosotros">
        <div class="container-sm p-3">
            <div class="row p-3"></div>
            <div class="container text-center">
                <div class="row justify-content-start">
                    <div class="col-sm">
                        <div class="icon-body">
                            <h2 class="icon-text text-white">MISIÓN</h2>
                        </div>
                        <div class="body-text">
                            <p class="body-text text-white">{{ mission }}</p>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="icon-body">
                            <h2 class="icon-text text-white">VISIÓN</h2>
                        </div>
                        <div class="body-text">
                            <p class="body-text text-white">{{ vision }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-sm-8">
                        <div class="icon-body">
                            <h2 class="icon-text text-white">VALORES</h2>
                        </div>
                        <div class="body-text">
                            <p class="body-text text-white">{{ values }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['mission', 'vision', 'values'],
};
</script>
