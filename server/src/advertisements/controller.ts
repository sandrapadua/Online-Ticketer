import { JsonController, NotFoundError, HttpCode,Get,Post, Param,Put,Body } from 'routing-controllers'
// type PageList = { pages: Page[] }
import Event from './entity'
// import { validate } from 'class-validator'

@JsonController()
export default class PageController {

    @Get('/advertisements/:id')
    getPage(
        @Param('id') id: number
    ) {
        return Event.findOne(id)
    }

    @Get("/events")
   async allAdvertisements(
    ){
        console.log("****************Events********")
        // const value = Object.values(pagesById)
        const events = await Event.find()
        return {
            events
        }
    }

    @Put('/advertisements/:id')
    async updateAdvertisement(
    @Param('id') id: number,
    @Body() update: Partial<Event>
    ){ 
        const advertisement =await Event.findOne(id)
        if (!advertisement) throw new NotFoundError('Cannot find page')
        return Event.merge(advertisement, update).save() }

    @Post('/pages')
    @HttpCode(201)
    async createPage(
    @Body() advertisement: Event) {
        
            return advertisement.save()
        
    

       
    }
}