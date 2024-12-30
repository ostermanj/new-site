<script lang="ts">

	import NameImage from "./NameImage.svelte";
    let header: HTMLElement | null;
    const setObserver = (node: HTMLDivElement) => {
        let timeout: number | undefined;
        let lastIntersectionRatio = 0;
        let lastSpeed = 0;
        const effectStrength = 6 * (window.innerHeight / window.innerWidth) ** 2;
        const options:IntersectionObserverInit = {
            threshold: Array.from({ length: 51 }, (_, i) => (i * 1) / (51 - 1))
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const speed = entry.intersectionRatio - lastIntersectionRatio;
                if (speed > lastSpeed){
                    // console.log(entry.intersectionRatio, lastIntersectionRatio);
                    clearTimeout(timeout);
                    header?.style.setProperty('--multiplier', Math.max(1, 1 + speed * effectStrength).toFixed(2))
                    lastSpeed = speed;
                }
                timeout = setTimeout(() => {
                    header?.style.setProperty('--multiplier', '1');
                    lastSpeed = 0;
                }, 500);
                lastIntersectionRatio = entry.intersectionRatio;
            })
        }, options);
        observer.observe(node);
    }

</script>
<header bind:this={header}>
    <h1>
        <span class="u-visually-hidden">john osterman</span>
        <div aria-hidden="true" class="svg-wrapper-outer">
            <div class="svg-wrapper">
                <NameImage></NameImage>
            </div>
        </div>
    </h1>
    <div class="observer-target"  use:setObserver></div>
</header>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magnam, rem neque vitae esse tenetur fugiat natus molestias hic laborum saepe incidunt explicabo, eum officia deleniti! Ab, sed. Tenetur asperiores eaque in nesciunt deserunt? Explicabo eos delectus voluptate veniam laboriosam incidunt, error vero, esse maxime numquam quam quasi reprehenderit quaerat odio veritatis laudantium, obcaecati neque porro nisi deserunt minus magni laborum odit consequuntur. Magnam enim saepe aperiam perferendis ipsum doloremque delectus aliquam facere architecto laudantium voluptas quam harum error voluptatem odio earum, eos rem commodi. Mollitia a distinctio explicabo rerum dolorum ea, doloremque perspiciatis vel enim voluptatem, quos quia consequatur?</p>
<style>
    @keyframes test {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes rotate-back {
        0% {
            transform: rotateX(0) translateX(0);
        }
        35% {
            transform: rotateX(60deg) translateX(0);
        }
        45% {
            transform: rotateX(90deg) translateX(100%);
        }
        50% {
            transform: rotateX(90deg) translateX(100%);
        }
        100% {
            transform: rotateX(90deg) translateX(100%);
        }
    }
    @keyframes rotate-in {
        0% {
            transform: rotateY(-70deg);
        }
        35% {
            transform: rotateY(-70deg);
        }
        45% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(0deg);
        }
    }
    @keyframes fly-in {
        0% {
            transform: translateX(-100%);
        }
        50% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes fade-out {
        0% {
            background-color: oklch(0.82 0.08 225.77);
        }
        45% {
            background-color: oklch(0.82 0.08 225.77);
        }
        50% {
            background-color: oklch(0.89 0.04 225.77);
        }
        100% {
            background-color: oklch(0.89 0.04 225.77);
        }

    }

    header {
        display: flex;
        align-items: end;
        justify-content: end;
        background-color: oklch(0.82 0.08 225.77);
        color: var(--c-primary-1);
        height: 100dvh;
        outline: 1px solid magenta;
    }
    h1 {
        display: flex;
        justify-content: end;
        width: 100%;
    }
    .svg-wrapper-outer {
        width: 100%;
    }
    /* TODO: change this to something else */
    @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
        header { 
            --multiplier: 1;

            /* display: revert; */
            height: 200dvh;
        }
        h1 {
            position: fixed;
            inset-inline-end: 0;
            inset-block-end: 0;
            transform: scaleY(calc(var(--multiplier) * 1)) scaleX(max(0.2, calc(1 - (var(--multiplier) - 1) / 6)));
            transform-origin: bottom right;
            opacity: calc(1 / var(--multiplier));
            transition: transform 200ms ease-in-out;
        }
        .observer-target {
            height: 100vh;
            width: 1px;
            outline: 1px solid cyan;
        }
    }
    /* @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
        header { 
            display: revert;
            height: 200dvh;
            animation: fade-out linear;
            animation-timeline: --header-progress;
        }
        .svg-wrapper-outer {
            perspective: 200vw;
            perspective-origin: bottom right;
            position: fixed;
    
        }
    
        .svg-wrapper {
            animation: rotate-back ease-in;
            animation-timeline: --header-progress;
        }
        p {
            color: oklch(0.89 0.04 225.77);
        }
    } */
</style>
