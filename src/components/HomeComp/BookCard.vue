<template>
    <div class="fs-book-card-container">
      <div class="fs-book-card-image" >
        <img :src="props.detail.cover"/>
      </div>
      <div class="fs-book-card-footer">
        <div class="title">{{ props.detail.title }}</div>
        <div class="author">
          <div class="author-info">
            <!-- <div class="avatar" /> -->
            <img :src="props.detail.avatar" class="avatar" />
            <span class="name">{{ props.detail.author }}</span>
          </div>
          <van-icon name="like-o" />
          <div class="like">{{props.detail.like}}</div>
        </div>
      </div>
    </div>
</template>
  
  <script setup lang="ts">
  interface ICardDetail {
    bgColor: string;
    title: string;
    author: string;
    imageHeight: number;
    avatar:string;
    cover:string;
    like:string;
    [key: string]: any;
  }
  const props = defineProps<{
    detail: ICardDetail;
  }>();
  </script>
  
  <style scoped lang="scss">
  .fs-book-card {
    &-container {
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
    &-image {
      width: 100%;
      height: v-bind("`${props.detail.imageHeight}px`");
      border: 1px solid #eee;
      border-radius: 20px;
      img{
        border-radius: 10px 10px 0 0;
      }
    }
    &-footer {
      padding: 10px;
      font-size: 12px;
      .title {
        margin-bottom: 8px;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: rgba(51, 51, 51, 0.8);
        font-weight: bold;
        color: black;
      }
      .author {
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        .author-info {
          flex: 1;
          display: flex;
          align-items: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .avatar {
            margin-right: 6px;
            width: 20px;
            height: 20px;
            border-radius: 20px;
          }
          .name {
            width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: rgba(51, 51, 51, 0.8);
          }
        }
        .like{
          font-weight: lighter;
          font-size: 12px;
        }
      }
    }
  }
  </style>
  