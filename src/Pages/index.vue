<template>
  <!-- hero -->
  <section class="pad-y-96">
    <div class="container-centre">
      <article class="two-thirds-width pb-24">
        <h1 class="mb-4 lg:mb-6">Simple, transparent business credit cards</h1>
        <h4 class="mb-8 lg:mb-12">
          Mo money, no problems. Untitled is a next-generation financial
          technology company in the process of reinventing banking. 30-day free
          trial.
        </h4>
        <div
          class="
            flex flex-col
            gap-3
            text text-center
            md:space-x-3 md:flex-row md:flex
          "
        >
          <a href="#" class="py-4 px-7 white-button border">Demo</a>
          <a href="#" class="py-4 px-7 purple-button">Signup</a>
        </div>
      </article>
    </div>
    <img src="" alt="" class="h-96 w-full border md:container md:mx-auto" />
  </section>

  <!-- social proof section -->
  <section
    class="
      container-lg
      mx-auto
      bg-gray-50
      pad-b-96
      py-16
      lg:container lg:rounded-2xl
    "
  >
    <div class="flex-c mx-16">
      <h4 class="mb-11 text-center">Trusted by 4,000+ companies</h4>
      <div class="grid grid-cols-2 justify-between flex-r">
        <i v-for="icon in icons" :key="icon.id">{{ icon.name }}</i>
      </div>
    </div>
  </section>

  <!-- features section -->
  <section class="container-centre pt-9">
    <div class="two-thirds-width mb-12 md:mb-16">
      <h5>Features</h5>
      <h2>The only card you’ll ever need. Simple.</h2>
      <h4>
        Spend smarter, lower your bills, get cashback on everything you buy, and
        unlock credit to grow your business.
      </h4>
    </div>
  </section>
  <section class="flex-r border-b md:container pad-b-96 md:mx-auto">
    <div class="container-centre pad-b-96">
      <article
        v-for="feature in features"
        :key="feature.id"
        :class="[
          feature.border ? 'border-brightPurple' : '',
          'py-2 border-l-4 ',
        ]"
      >
        <h3 class="ml-6 mb-2">{{ feature.name }}</h3>
        <p class="ml-6 mb-5">
          {{ feature.expand }}
        </p>
        <h5 class="mb-0">
          <a href="#" class="ml-6"> Learn More <span>></span> </a>
        </h5>
      </article>
    </div>
    <img src="#" alt="" class="border pad-b-96 md:container md:mx-auto" />
  </section>

  <!-- more features -->
  <section class="mb-16">
    <div class="text-center two-thirds-width mx-auto">
      <h5>Features</h5>
      <h2 class="mb-5">All-in-one finance for any business</h2>
      <h4>
        Get a deposit account, credit card, and spend management software—in one
        refreshingly easy solution. No fees or minimums.
      </h4>
    </div>
  </section>
  <img src="" alt="" class="border h-96 md:container md:mx-auto" />
  <section class="mx-auto text-center py-24 bg-gray-50">
    <article class="mb-10 container-centre">
      <h2>Start your 30-day free trial</h2>
      <h4>Join over 4,000+ startups already growing with Untitled.</h4>
    </article>
    <div class="space-x-3">
      <a href="#" class="py-3 px-5 white-button">Learn More</a>
      <a href="#" class="py-3 px-5 purple-button">Get Started</a>
    </div>
  </section>

  <!-- Pricing section -->
  <section class="container-centre pad-y-96">
    <article class="pb-12">
      <h5>Upgrade</h5>
      <h2>Pricing as simple as our cards</h2>
      <h4 class="text-lg">
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </h4>
    </article>

    <div class="flex-r gap-24">
      <!-- features -->
      <div class="my-auto sm:mb-12">
        <section class="flex-c gap-y-14 sm:">
          <article
            v-for="feature in features"
            :key="feature.id"
            class="flex flex-row gap-x-4"
          >
            <img src="#" class="w-12 h-12" />
            <div>
              <h3 class="mb-2">{{ feature.name }}</h3>
              <p>
                {{ feature.expand }}
              </p>
            </div>
          </article>
        </section>
      </div>

      <!-- card -->
      <section class="box">
        <div
          class="
            flex flex-col-reverse
            border-b
            pt-9
            px-8
            justify-between
            flex-r
          "
        >
          <div>
            <h3 class="font-semibold text-xl lg:text-2xl">
              Basic Plan
              <span
                class="
                  text-primary700
                  bg-primary50
                  rounded-2xl
                  px-2
                  py-1
                  text-xs
                "
                >popular
              </span>
            </h3>
            <p class="whitespace-nowrap sm:pb-8">
              Our most popular plan for small teams.
            </p>
          </div>

          <div class="flex flex-row">
            <h2 class="mb-0">$</h2>
            <h1>10</h1>
            <p class="font-medium whitespace-nowrap">per month</p>
          </div>
        </div>

        <div class="px-8 flex-c border-b">
          <article class="py-6">
            <p class="text-gray-900 font-semibold uppercase">Features</p>
            <p>
              Everything in our
              <span class="font-semibold">free plan</span> plus....
            </p>
          </article>

          <div
            class="
              flex-c
              space-y-4
              md:grid md:grid-cols-2 md:gap-y-4 md:gap-x-8
              mb-10
            "
          >
            <p v-for="feature in cardFeatures" :key="feature.id">
              <span class="w-6 h-6 border mr-3"></span>
              {{ feature.name }}
            </p>
          </div>
        </div>

        <div class="flex justify-center p-7">
          <a href="#" class="purple-button text-center container py-3">
            Get Started</a
          >
        </div>
      </section>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section
    class="
      bg-gray-800
      container-centre
      mx-auto
      justify-between
      flex-r
      rounded-3xl
      text-white
      mb-16
      lg:mb-24
    "
  >
    <div class="container-centre my-20 md:mx-16">
      <article>
        <div>stars</div>
        <h2 class="pt-6 pb-8 mb-0">
          Love the simplicity of the service and the prompt customer support. We
          can’t imagine working without it.
        </h2>
        <div class="mb-8">
          <p class="font-semibold text-white text-lg space-y-1">
            — Renee Wells
          </p>
          <p class="text-white">Product Designer, Quotient</p>
        </div>
        <div>...</div>
      </article>
    </div>
    <img src="#" alt="a woman" class="container-centre rounded-r-2xl" />
  </section>

  <!-- CTA section -->
  <section
    class="
      container-centre
      mx-auto
      bg-darkerPurple
      text-white
      font-semibold
      rounded-xl
      py-16
      mb-16
      lg:mb-24
    "
  >
    <div class="flex-r justify-between mx-4 md:mx-16">
      <article>
        <h2 class="text-3xl mb-4">
          Start your <span class="hidden lg:inline-block">30-day</span> free
          trial
        </h2>
        <h3 class="text-primary200 font-normal">
          Join over 4,000+ startups already growing with Untitled.
        </h3>
      </article>
      <section class="text-center flex flex-col gap-y-3 lg:space-x-3 flex-r">
        <a href="#" class="h-fit py-3 px-5 white-button">Learn More</a>
        <a href="#" class="h-fit py-3 px-5 purple-button">Get Started</a>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { cardFeature, feature, icon } from "../assets/types";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      icons: [
        { id: 1, name: "boltshift", logo: "#" },
        { id: 2, name: "lightbox", logo: "#" },
        { id: 3, name: "featherdev", logo: "#" },
        { id: 4, name: "spherule", logo: "#" },
        { id: 5, name: "globalbank", logo: "#" },
      ] as Array<icon>,

      features: [
        {
          id: 1,
          name: "Share team inboxes",
          expand:
            "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
          learnMore: true,
          border: true,
        },
        {
          id: 2,
          name: "Deliver instant answers",
          expand:
            "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
          learnMore: true,
        },
        {
          id: 3,
          name: "Manage your team with reports",
          expand:
            "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
          learnMore: true,
        },
      ] as Array<feature>,

      cardFeatures: [
        { id: 1, name: "Access to basic features" },
        { id: 2, name: "Attend events" },
        { id: 3, name: "Basic reporting + analytics" },
        { id: 4, name: "Automatic updates" },
        { id: 5, name: "Up to 10 individual users" },
        { id: 6, name: "Backup your account" },
        { id: 7, name: "20GB individual data" },
        { id: 8, name: "Audit log and notes" },
        { id: 9, name: "Basic chat support" },
        { id: 10, name: "Feature requests" },
      ] as Array<cardFeature>,
    };
  },
});
</script>

<style scoped>
</style>