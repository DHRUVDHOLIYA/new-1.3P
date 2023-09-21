
import { ref } from "vue";
import { getMyProjects, MyProject } from "../service/getProjects"; 

export function useProjects() {
  const projects = ref<MyProject[] | null>(null);
  const isLoading = ref(false);
  const error = ref(null);

  async function fetchProjects(): Promise<void> {
    isLoading.value = true;
    error.value = null;

    try {
      projects.value = await getMyProjects(); 
    } catch (err: any) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  }

  return { projects, isLoading, error, fetchProjects };
}
