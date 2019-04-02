import { JsonController, NotFoundError, HttpCode,Get,Post, Param,Put,Body } from 'routing-controllers'
// type PageList = { pages: Page[] }
import Advertisement from './entity'
// import { validate } from 'class-validator'

@JsonController()
export default class PageController {

    @Get('/advertisements/:id')
    getPage(
        @Param('id') id: number
    ) {
        return Advertisement.findOne(id)
    }

    @Get("/advertisements")
   async allAdvertisements(
    ){
        // const value = Object.values(pagesById)
        const advertisements = await Advertisement.find()
        return {
            advertisements
        }
    }

    @Put('/advertisements/:id')
    async updateAdvertisement(
    @Param('id') id: number,
    @Body() update: Partial<Advertisement>
    ){ 
        const advertisement =await Advertisement.findOne(id)
        if (!advertisement) throw new NotFoundError('Cannot find page')
        return Advertisement.merge(advertisement, update).save() }

    @Post('/pages')
    @HttpCode(201)
    async createPage(
    @Body() advertisement: Advertisement) {
        
            return advertisement.save()
        
    

       
    }
}