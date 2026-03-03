import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CourseComment {
  author: string;
  text: string;
  createdAt: string;
}

@Component({
  selector: 'app-comments-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comments-chat.html',
  styleUrl: './comments-chat.scss'
})
export class CommentsChat {
  chatTitle = 'Чат комментариев';
  authorName = '';
  newMessage = '';
  messageLimit = 120;

  comments: CourseComment[] = [
    {
      author: 'Преподаватель',
      text: 'Если есть вопросы по заданию, пишите сюда.',
      createdAt: '09:00'
    }
  ];

  get canSend(): boolean {
    return this.authorName.trim().length > 0 && this.newMessage.trim().length > 0;
  }

  get charsLeft(): number {
    return this.messageLimit - this.newMessage.length;
  }

  sendComment(): void {
    if (!this.canSend) {
      return;
    }

    const time = new Date().toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });

    this.comments.unshift({
      author: this.authorName.trim(),
      text: this.newMessage.trim(),
      createdAt: time
    });

    this.newMessage = '';
  }

  onMessageInput(): void {
    if (this.newMessage.length > this.messageLimit) {
      this.newMessage = this.newMessage.slice(0, this.messageLimit);
    }
  }
}
