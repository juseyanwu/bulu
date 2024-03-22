<template>
  <div class="discover h-lvh w-screen flex items-center justify-center">
    <div class="container w-full h-full" ref="fContainerRef">
      <WaterFall
        :bottom="20"
        :column="column"
        :gap="10"
        :page-size="20"
        :request="getData"
      >
        <template #item="{ item, index, imageHeight }">
          <BookCard
            :detail="{
              imageHeight,
              title: item.title,
              author: item.author,
              avatar:item.avatar,
              cover:item.cover,
              like:item.like,
            }"
          />
        </template>
      </WaterFall>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from "@/config/data.json";
import { ICardItem } from "@/types/ICardItem";
import WaterFall from "@/components/HomeComp/WaterFall.vue";
import BookCard from "@/components/HomeComp/BookCard.vue";
import { onMounted, onUnmounted, ref } from "vue";


const fContainerRef = ref<HTMLDivElement | null>(null);
const column = ref(4);
const fContainerObserver = new ResizeObserver((entries) => {
  changeColumn(entries[0].target.clientWidth);
});

const changeColumn = (width: number) => {
  if (width > 960) {
    column.value = 5;
  } else if (width >= 690 && width < 960) {
    column.value = 4;
  } else if (width >= 500 && width < 690) {
    column.value = 3;
  } else {
    column.value = 2;
  }
};

onMounted(() => {
  fContainerRef.value && fContainerObserver.observe(fContainerRef.value);
});

onUnmounted(() => {
  fContainerRef.value && fContainerObserver.unobserve(fContainerRef.value);
});

const list: ICardItem[] = data.data.items.map((i) => ({
  id: i.id,
  url: i.note_card.cover.url_pre,
  width: i.note_card.cover.width,
  height: i.note_card.cover.height,
  title: i.note_card.display_title,
  author: i.note_card.user.nickname,
  avatar:i.note_card.user.avatar,
  cover:i.note_card.cover.info_list[0].url,
  like:i.note_card.interact_info.liked_count
}));

const getData = (page: number, pageSize: number) => {
  return new Promise<ICardItem[]>((resolve) => {
    setTimeout(() => {
      resolve(
        list.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
      );
    }, 1000);
  });
};
</script>

<style scoped></style>
