<template>
    <NavBar></NavBar>
    <h1>Menu principal</h1>
    <AcademicStaffMenu></AcademicStaffMenu>
    <Footer></Footer>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import AcademicStaffMenu from '@/components/StaffComponents/AcademicStaffMenu.vue';

export default{
    components: {
        NavBar,
        Footer,
        AcademicStaffMenu
    }

}
</script>
<style>

</style>