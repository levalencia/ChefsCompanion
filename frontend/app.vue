<template>
  <div>
    <NuxtLayout>
      <Header />
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="proteins">Proteins</NuxtLink>
          </li>
        </ul>
        <h2> Content</h2>

        <div>
          <NuxtPage />
        </div>
    
    </NuxtLayout>
    <!-- <NuxtWelcome /> -->
  </div>
</template>
