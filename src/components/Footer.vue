<template>
  <footer>
    <!-- article and subscription form -->
    <section class="container-lg bg-gray-50 py-12">
      <div class="container-centre justify-between flex-r">
        <article class="mb-8">
          <h3 class="mb-2">Join our newsletter</h3>
          <p>Banking technology that has your back.</p>
        </article>

        <form action="submit" class="flex flex-col flex-r gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            class="border rounded-lg py-2.5 px-5 h-fit"
          />
          <button type="submit" class="h-fit py-2.5 px-5 purple-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>

    <!-- stacked links -->
    <section class="container-centre border-b py-12 lg:py-16 flex-r">
      <article class="basis-5/12 mb-12 lg:container">
        <img src="" alt="" />
        <p class="">
          Design amazing digital experiences that create more happy in the
          world.
        </p>
      </article>

      <section
        class="
          container
          justify-around
          font-semibold
          grid grid-cols-2
          gap-x-8 gap-y-8
          flex-r
        "
      >
        <div v-for="links in linksdata" :key="links.id">
          <p class="text-gray-500 text-sm uppercase mb-4">{{ links.title }}</p>
          <div
            v-for="link in links.link"
            :key="link.id"
            class="text-gray-600 capitalize mb-3"
          >
            <a href="`${link.link}`" class=""
              >{{ link.name }}
              <span
                v-if="link.badge"
                class="
                  text-success700 text-sm
                  bg-success50
                  rounded-2xl
                  py-1
                  px-2
                "
              >
                new
              </span>
            </a>
          </div>
        </div>
      </section>
    </section>

    <!-- copywright and icons -->
    <section
      class="
        container-centre
        mx-auto
        flex flex-col-reverse
        justify-between
        gap-6
        py-12
        flex-r
      "
    >
      <!-- copywright -->
      <p>&copy; 2077 Untitled UI. All rights reserved</p>
      <!-- icons -->

      <div class="space-x-8 fa-lg text-gray-600">
        <!-- <a
          v-for="icon in icons"
          :key="icon.id"
          href="`${icon.logo}`"
          class="h-6 w-6 border"
        >
          <i class="`${icon.logo}`" />
        </a> -->
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-dribbble"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-angellist"></i>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
import { icon, linksdata } from "@/assets/types";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "FooterComp",
  data() {
    return {
      linksdata: [
        {
          id: 1,
          title: "Products",
          link: [
            { name: "Overview", link: "#", id: 1 },
            { name: "Features", link: "#", id: 2 },
            { name: "Solution", link: "#", id: 3, badge: true },
            { name: "Tuitorial", link: "#", id: 4 },
            { name: "Pricing", link: "#", id: 5 },
            { name: "Releases", link: "#", id: 6 },
          ],
        },
        {
          id: 2,
          title: "company",
          link: [
            { name: "About Us", link: "#", id: 1 },
            { name: "Careers", link: "#", id: 2 },
            { name: "Press", link: "#", id: 3 },
            { name: "News", link: "#", id: 4 },
            { name: "Media Kit", link: "#", id: 5 },
            { name: "Contact", link: "#", id: 6 },
          ],
        },
        {
          id: 3,
          title: "Resources",
          link: [
            { name: "Blog", link: "#", id: 1 },
            { name: "Newsletter", link: "#", id: 2 },
            { name: "Events", link: "#", id: 3 },
            { name: "Help Centre", link: "#", id: 4 },
            { name: "Tuitorials", link: "#", id: 5 },
            { name: "Support", link: "#", id: 6 },
          ],
        },
        {
          id: 4,
          title: "Social",
          link: [
            { name: "twitter", link: "#", id: 1 },
            { name: "linkedin", link: "#", id: 2 },
            { name: "facebook", link: "#", id: 3 },
            { name: "github", link: "#", id: 4 },
            { name: "angelList", link: "#", id: 5 },
            { name: "Dribble", link: "#", id: 6 },
          ],
        },
        {
          id: 5,
          title: "legal",
          link: [
            { name: "terms", link: "#", id: 1 },
            { name: "privacy", link: "#", id: 2 },
            { name: "cookies", link: "#", id: 3 },
            { name: "licenses", link: "#", id: 4 },
            { name: "settings", link: "#", id: 5 },
            { name: "contacts", link: "#", id: 6 },
          ],
        },
      ] as Array<linksdata>,
      icons: [
        { name: "facebook", logo: "fa-brands fa-facebook", id: 1 },
        { name: "github", logo: "fa-brands fa-github", id: 2 },
        { name: "twitter", logo: "fa-brands fa-twitter", id: 3 },
        { name: "dribble", logo: "fa-brands fa-dribbble", id: 4 },
        { name: "last", logo: "fa-regular fa-circle", id: 5 },
        { name: "linkedin", logo: "fa-brands fa-linkedin", id: 6 },
      ] as Array<icon>,
    };
  },
});
</script>

<style>
</style>