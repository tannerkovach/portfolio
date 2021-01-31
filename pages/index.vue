<template>
    <div class="wrapper">
        <section id="header" class="container mx-auto py-8">
            <nav class="mx-6 sm:mx-4 flex justify-center sm:justify-end">
                <ul class="flex flex-wrap">
                    <li>
                        <a
                            class="hover:underline text-purple-700"
                            href="/resume.pdf"
                            target="_blank"
							rel="noreferrer"
                            >Résumé</a
                        >
                    </li>
                    <li>
                        <a
                            class="hover:underline text-purple-700"
                            href="https://github.com/tannerkovach"
                            target="_blank"
							rel="noreferrer"
							
                            >GitHub</a
                        >
                    </li>
                    <li>
                        <a
                            class="hover:underline text-purple-700"
                            href="https://codepen.io/tannerkovach"
                            target="_blank"
							rel="noreferrer"
                            >CodePen</a
                        >
                    </li>
                </ul>
            </nav>
        </section>
        <section
            id="intro"
            class="container mx-auto h-96 mb-8 sm:h-144 flex flex-col justify-center"
        >
            <h1 class="mx-6 sm:mx-4 text-xl mb-4 font-normal">Tanner Kovach</h1>
            <h2 class="mx-6 sm:mx-4 text-5xl sm:text-6xl md:text-7xl mb-8">
                Front-End Web Developer <br />
                & Designer
            </h2>
            <a
                href="mailto:info@tannerkovach.com"
                class="mx-6 sm:mx-4 self-start btn text-white bg-purple-700 py-1 px-3 rounded-full"
            >
                <button tabindex="-1" class="font-bold">Let's Chat</button>
            </a>
        </section>

        <section id="work" class="container mx-auto max-w-5xl mb-28">
            <div class="container">
                <h3
                    class="mx-6 sm:mx-4 text-xl mb-10 border-b-4 border-gray-300"
                >
                    Projects
                </h3>
                <ul class="mx-6 sm:mx-4 md:mx-0">
                    <li class="mb-4">
                        <details open class="cursor-pointer">
                            <summary class="mb-2 text-2xl">Librarian</summary>
                            <div class="mb-10 items-center flex-wrap">
                                <p class="max-w-2xl mb-4">
                                    A quick CRUD webapp I created to learn
                                    Google's Firebase Database software, as well
                                    as Firebase Authentication. App offers
                                    email/password authentication and basic
                                    read/write abilities to save read and unread
                                    books in a users library. <span class="italic">Email verification is not required to demo the app.</span>
                                </p>
                                <div class="link-group">
                                    <ul class="flex">
                                        <li>
                                            <a
                                                href="https://github.com/tannerkovach/Librarian-App"
                                                class="text-purple-700 hover:underline"
                                                target="_blank"
												rel="noreferrer"
                                                >Code</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="https://librarian-app.netlify.app/"
                                                class="text-purple-700 hover:underline"
                                                target="_blank"
												rel="noreferrer"
                                                >Demo</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </li>

                    <li class="mb-4">
                        <details open class="cursor-pointer">
                            <summary class="mb-2 text-2xl">Bulletproof</summary>
                            <div class="mb-10 items-center flex-wrap">
                                <p class="max-w-2xl mb-4">
                                    Role consisted of HTML, SCSS, and Liquid
                                    work associated to product and landing
                                    pages. The other half of this role consisted
                                    of general website maintenance for
                                    Bulletproof's eCommerce team using the
                                    Shopify CMS.
                                </p>
                                <div class="link-group">
                                    <ul class="flex">
                                        <!-- <li>
											<a
												href="#"
												class="text-purple-700 hover:underline"
												>Code</a
											>
										</li> -->
                                        <li>
                                            <a
                                                href="https://bulletproof.com"
                                                class="text-purple-700 hover:underline"
                                                target="_blank"
												rel="noreferrer"
                                                >Website</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </li>

                    <li class="mb-4">
                        <details open class="cursor-pointer">
                            <summary class="mb-2 text-2xl">
                                Frankie & Jo's
                            </summary>
                            <div class="mb-10 items-center flex-wrap">
                                <p class="max-w-2xl mb-4">
                                    A custom Shopify template that I helped
                                    implement for a Seattle-based vegan ice
                                    cream shop. Worked with their designer to
                                    translate the Illustrator mockups into HTML,
                                    CSS, and Liquid.
                                </p>
                                <div class="link-group">
                                    <ul class="flex">
                                        <!-- <li>
											<a
												href="#"
												class="text-purple-700 hover:underline"
												>Code</a
											>
										</li> -->
                                        <li>
                                            <a
                                                href="https://frankieandjos.com/"
                                                class="text-purple-700 hover:underline"
                                                target="_blank"
												rel="noreferrer"
                                                >Website</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </details>
                    </li>
                </ul>
            </div>
        </section>

        <section id="about" class="container mx-auto mb-28">
            <div class="container">
                <h3
                    class="text-xl mb-10 mx-6 sm:mx-4 border-b-4 border-gray-300"
                >
                    About
                </h3>
                <div class="mx-6 sm:mx-4 md:mx-0">
                    <nuxt-content :document="page" class="pb-5 sm:pl-0 lg:pl-6"></nuxt-content>
                </div>
                <figure class="img-wrapper">
                    <img
						width="275"
						height="275"
						
                        src="~/assets/IMG_0823.jpg"
                        alt="Tanner Kovach"
                        class="sm:px-4 md:px-0"
                    />
                    <figcaption
                        class="text-sm text-gray-800 text-center italic pt-2"
                    >
                        Me and my fluffball corgi in a field of tulips
                    </figcaption>
                </figure>
            </div>
        </section>

        <section id="contact" class="py-8 flex flex-col">
            <div class="container flex">
                <h3
                    class="text-xl mb-10 mx-6 sm:mx-4 border-b-4 border-gray-300"
                >
                    Contact
                </h3>
            </div>

            <ul
                class="container flex flex-col-reverse mx-6 sm:mx-4 sm:flex-row items-start sm:items-center"
            >
                <li class="ml-6 sm:ml-4">
                    <a
                        class="emailAddress hover:underline text-purple-700"
                        href="mailto:info@tannerkovach.com"
                        >info@tannerkovach.com</a
                    >
                </li>

                <li class="mb-2 ml-6 sm:ml-0 sm:mb-0">
                    <a
                        class="hover:underline text-purple-700"
                        href="/resume.pdf"
                        target="_blank"
						rel="noreferrer"
                        >Résumé</a
                    >
                </li>

                <li class="mb-2 ml-6 sm:ml-0 sm:mb-0">
                    <a
                        class="hover:underline text-purple-700"
                        href="https://github.com/tannerkovach"
                        target="_blank"
						rel="noreferrer"
                        >GitHub</a
                    >
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('about').fetch()

    return {
      page
    }
  }
}
</script>
