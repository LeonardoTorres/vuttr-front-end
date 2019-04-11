import ApiRequest from "../helpers/ApiRequest";

const baseUrl = "tools";

class ToolsService {
  async listByTags(tag) {
    try {
      const { data } = await ApiRequest.get(baseUrl, {
         params:{
            tags_like:tag
         }
      });
      return data;
    } catch (error) {
       
    }
  }

  async list() {
    try {
      const { data } = await ApiRequest.get(baseUrl);
      return data;
    } catch (error) {
    }
  }
  
  async create(tool){
   try {
      const { data } = await ApiRequest.post(`/${baseUrl}`, tool);
      return data; 
    } catch (error) {}
  }

  async remove(id){
   try {
      const { data } = await ApiRequest.delete(`/${baseUrl}/${id}`);
    } catch (error) {}
  }
}

export default new ToolsService();
