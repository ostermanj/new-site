<script>

	import NameImage from "./NameImage.svelte";

</script>
<header>
    <nav>
        <menu>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/blogs">Blog posts</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/peace-corps">Peace corps</a>
            </li>
        </menu>
    </nav>
    <h1 class="u-visually-hidden">john osterman</h1>
    <!-- <img src="/images/name.svg" alt="" srcset=""> -->
    <div class="svg-wrapper-outer">
        <div class="svg-wrapper">
            <NameImage></NameImage>
        </div>
    </div>

</header>
<style>
    @keyframes rotate-back {
        0% {
            transform: rotateX(0) translateX(0);
        }
        80% {
            transform: rotateX(70deg) translateX(0);
        }
        100% {
            transform: rotateX(70deg) translateX(100%);
        }
    }
    @keyframes rotate-in {
        0% {
            transform: rotateY(90deg);
        }
        80% {
            transform: rotateY(90deg);
        }
        100% {
            transform: rotateY(0deg);
        }
    }
    @keyframes fly-in {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    menu {
        display: flex;
        justify-content: space-between;
        background-color: transparent;
        position: fixed;
        inset-inline: 0;
        border-bottom: 1px solid #fff;
    }
    header {
        display: flex;
        align-items: end;
        justify-content: end;
        background-color: skyblue;
        color: var(--c-primary-1);
        height: 100dvh;
    }
    .svg-wrapper-outer {
        width: 80%;
    }
    @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
        menu {
            animation: rotate-in ease-in;
            animation-timeline: scroll(nearest block);

        }
        header { 
            display: revert;
            height: 200dvh;
        }
        .svg-wrapper-outer {
            perspective: 1000px;
            perspective-origin: bottom right;
            position: fixed;
            inset-inline-end: 0;
            inset-block-end: 0;
    
        }
    
        .svg-wrapper {
            animation: rotate-back ease-in;
            animation-timeline: scroll(nearest block);
        }
    }
</style>
