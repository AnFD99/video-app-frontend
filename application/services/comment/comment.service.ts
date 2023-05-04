import { instanceAPI } from 'api/api'
import { IComment, ICommentDetails } from 'types/comment.interface'

export const CommentService = {
  async createComment(body: ICommentDetails) {
    const response = await instanceAPI.post<IComment>(`/comment`, body)

    return response
  },

  async getCommentsByVideo(videoId: string) {
    const response = await instanceAPI.get<IComment[]>(
      `/comment/by-video/${videoId}`
    )

    return response
  }
}
