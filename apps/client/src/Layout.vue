<template>
    <div class="layout">
        <header>
            <slot name="header"></slot>
        </header>
       <!-- <aside v-if="$slots.aside">
            <slot name="aside"></slot>
        </aside>-->
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style>

main {
  min-height: calc(100vh - 140px);
}
nav {
  display: flex;
  gap: 10px;
}



</style>