import { connectDB } from '@db/connection'
import { Province, ProvinceModel } from '@api/provinces/models/province.model'
import { Canton, CantonModel } from '@api/provinces/models/canton.model'

export class ProvinceService {
  _db = connectDB()

  async list(): Promise<Province[] | undefined> {
    try {
      const provinces = await ProvinceModel.find<Province>({})
      return provinces
    } catch (error) {
      console.log(error)
    }
  }

  async listCantons(id: string): Promise<Canton[] | undefined> {
    try {
      const province = parseInt(id)
      const cantons = await CantonModel.find<Canton>({ provinceId: province })
      return cantons
    } catch (error) {
      console.log(error)
    }
  }
}
