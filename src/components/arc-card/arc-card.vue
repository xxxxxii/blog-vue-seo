<!--
 * @Description: 
 * @version: 0.0.1
 * @Author: yulinZ
 * @LastEditTime: 2023-06-16 18:13:00
-->
<template>
  <article class="card">
    <span></span>
    <h3 class="card__title">Title</h3>
    <p class="card__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div class="card__date">April 15, 2022</div>
    <div class="card__arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="15"
        width="15"
      >
        <path
          fill="#fff"
          d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
        ></path>
      </svg>
    </div>
  </article>
</template>

<script lang="ts">
export default {
  name: "arc-card",
};
</script>

<script setup lang="ts">
import { ref, defineOptions } from "vue";
</script>

<style scoped lang="scss">
/* this card is inspired form this - https://georgefrancis.dev/ */
.card {
  --border-radius: 0.75rem;
  --primary-color: #7257fa;
  --secondary-color: #3c3852;
  width: 100%;
  font-family: "Arial";
  padding: 1rem;
  cursor: pointer;
  border-radius: var(--border-radius);
  //   background: #f1f1f3;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
  position: relative;
}

.card > * + * {
  margin-top: 1.1em;
}

.card .card__content {
  //   color: var(--secondary-color);
  font-size: 0.86rem;
}

.card .card__title {
  padding: 0;
  font-size: 1.3rem;
  font-weight: bold;
}

.card .card__date {
  color: #6e6b80;
  font-size: 0.8rem;
}

.card .card__arrow {
  position: absolute;
  background: var(--primary-color);
  padding: 0.4rem;
  border-top-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  bottom: 0;
  right: 0;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card svg {
  transition: 0.2s;
}

/* hover */
.card:hover .card__title {
  color: var(--primary-color);
  text-decoration: underline;
}

.card:hover .card__arrow {
  background: #111;
}

.card:hover .card__arrow svg {
  transform: translateX(3px);
}


//
.card span {
  position: absolute;
  overflow: hidden;
  width: 150px;
  height: 150px;
  top: -10px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card span::before {
  content: "Premium";
  position: absolute;
  width: 150%;
  height: 40px;
  background-image: linear-gradient(
    45deg,
    #ff6547 0%,
    #ffb144 51%,
    #ff7053 100%
  );
  transform: rotate(-45deg) translateY(-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
}

.card span::after {
  content: "";
  position: absolute;
  width: 10px;
  bottom: 0;
  left: 0;
  height: 10px;
  z-index: -1;
  box-shadow: 140px -140px #cc3f47;
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
}
</style>
