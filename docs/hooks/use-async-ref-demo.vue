<script lang="ts">
import Mock from 'mockjs';
import { computed } from 'vue';
import { useAsyncRef } from '../../src';
export interface UseAsyncRefDemoProps {
  prop1?: string;
}
export const UseAsyncRefDemoDefault = {};
export interface UseAsyncRefDemoEmits {
  (event: 'event1'): void;
}
export interface UserListItem {
  id: string;
  name: string;
  gender: 'male' | 'female';
  email: string;
  disabled: boolean;
}

const users = Mock.mock({
  'list|55': [
    {
      id: '@guid',
      name: '@name',
      'gender|1': ['male', 'female'],
      email: '@email',
      disabled: false,
    },
  ],
}).list;

export type GetUserListRequest = {
  pageNum;
  pageSize;
};
export type GetUserListResponse = {
  total: number;
  data: UserListItem[];
};

export async function getUserList({
  pageNum,
  pageSize,
}: {
  pageNum: number;
  pageSize: number;
}): Promise<GetUserListResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = users.length;
      const start = (pageNum - 1) * pageSize;
      const end = pageNum * pageSize;
      const data = users.slice(start, end);
      resolve({ total, data });
    }, 1000);
  });
}

// 获取用户信息函数
export async function getUserById({ id }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    }, 1000);
  });
}
</script>
<script setup lang="ts">
withDefaults(defineProps<UseAsyncRefDemoProps>(), UseAsyncRefDemoDefault);
defineEmits<UseAsyncRefDemoEmits>();
defineOptions({
  name: 'UseAsyncRefDemo',
});
// 初始化调用的数据
const {
  data: list,
  run: listRun,
  pagination: listPagination,
  loading: listLoading,
  err: listErr,
} = useAsyncRef<GetUserListResponse, GetUserListRequest>(
  (pagination) => getUserList({ ...pagination }),
  {
    defaultValue: {
      total: 0,
      data: [] as UserListItem[],
    },
  }
);
const getListDisabled = computed(() => {
  return listPagination.value.isLast || listLoading.value || !!listErr.value;
});
const onLoadNext = () => {
  if (getListDisabled.value) {
    return;
  }
  listRun({
    pageNum: listPagination.value.pageNum + 1,
    pageSize: listPagination.value.pageSize,
  });
};
const [user, userRun, userLoading] = useAsyncRef(
  ({ id }) => getUserById({ id }),
  {
    manual: true,
  }
);
const onUserClick = (item) => {
  userRun({
    id: item.id,
  });
};
</script>

<template>
  <h3>初始化加载数据</h3>
  <ul>
    <li
      v-for="item in list?.data"
      :key="item.id"
      @click="() => onUserClick(item)"
    >
      {{ item.name }} / {{ item.gender }}
    </li>
  </ul>
  <button :disabled="getListDisabled" @click="onLoadNext">加载下一页</button>
  <h3>点击item，后获取的项</h3>
  user:
  <template v-if="userLoading"> Loading... </template>
  <template v-else>
    {{ user }}
  </template>
</template>

<style scoped lang="scss">
.use-fetch-demo {
}
</style>
