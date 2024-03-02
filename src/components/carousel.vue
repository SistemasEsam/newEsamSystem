<template>
    <div class="carousel slide" id="mainSlider" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button v-for="slide in slides" :key="slide.id" :data-bs-target="'#mainSlider'" :data-bs-slide-to="slide.id"
                :class="{ 'active': slide.id === 0 }" :aria-current="slide.id === 0 ? 'true' : null"
                :aria-label="'Slide ' + (slide.id + 1)"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="slide in slides" :key="slide.id" :class="{ 'carousel-item': true, 'active': slide.id === 0 }">
                <img :src="slide.src" :alt="slide.alt" class="d-block w-100">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['slides'],
};
</script>
