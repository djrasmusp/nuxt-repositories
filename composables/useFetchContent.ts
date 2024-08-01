import {repository} from "~/utils/repository";
import {useAsyncData} from "#app";

export const useFetchIndex = async () => {
  const { $api } = useNuxtApp()
  const pageRepo = repository($api)
  const { data : indexPage } = await useAsyncData( () => pageRepo.getIndex())
  return {indexPage}
}

export const useFetchTest = async (node: string = '') => {
  const { $api } = useNuxtApp();
  const pageRepo = repository($api);

  return useAsyncData(() => pageRepo.getTest(node));
}



