import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  providers : [PostsService]
})
export class UserComponent {
 
 firstname = "Nabil"
 familyname = "Chiheb"
 job = "Full Stack developer"
 posts = []
 constructor ( private PostsService : PostsService){
   this.PostsService.getPosts().subscribe(posts => this.posts = posts)
 }
}
