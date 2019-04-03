import { JsonController, Get, Param, Body, Post, HttpCode, Authorized } from 'routing-controllers'
import Comment from './entity'


@JsonController()
export default class CommentController {

    @Get('/comments')
    async allComments() {
        const comments = await Comment.find()
        return { comments }
    } 
    @Get('/comments/:id')
    getComment(
        @Param('id') id: number
    ) {
        return Comment.findOne(id)
    } 
    @Authorized()
    @Post('/comments/:id')
    @HttpCode(201)
        createComment(
        @Body() comment: Comment,
        @Param('id') id: number
        ) {
            comment.ticket = id;
            return comment.save()
        } 
    }