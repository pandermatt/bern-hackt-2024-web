<template>
    <a href="https://suno.com/song/555dfb15-6ae4-49e7-900f-e8715079ae5c" class="listen-now VPButton brand" target="_blank">
        <img src="/img/wine-cover.jpg" alt="Wine Captain">
        <div class="text">
            <b>Wine Captain</b>
            <p>🎶 Tune in to our Wine Captain song on Suno and let the vibes flow! 🍷</p>
        </div>
    </a>
</template>

<style scoped>
.listen-now {
    display: flex;
    align-items: center;
    min-height: 80px;
    background-color: var(--vp-custom-block-info-bg);
    color: var(--vp-custom-block-info-text);
    border-radius: 10px;
    transition: background-color 0.3s, color 0.3s;
    margin: 5px 0;
}

.listen-now:hover {
    background-color: var(--vp-button-brand-active-bg);
    color: var(--vp-button-brand-active-text);
}

.listen-now .text {
    padding: 10px 20px;
}

.listen-now img {
    width: 70px;
    margin-left: 5px;
    border-radius: 10px;
}
</style>
