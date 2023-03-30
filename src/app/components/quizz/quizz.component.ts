import { Component, OnInit } from '@angular/core';
import { Question, Quizz } from 'src/app/pages/home/interfaces/quizz';
import quizz_questions from '../../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  public title: string = '';

  public questions: Question[] = [];
  public questionSelected!: Question;

  public answers: string[] = [];
  public answerSelected: string = '';

  public questionIndex: number = 0;
  public questionMaxIndex: number = 0;

  public finished: boolean = false;

  constructor() {}

  public ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  public playerChoose(value: string) {
    this.answers.push(value);
    this.nexStep();
  }

  public async nexStep() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      const finalAnswer: string = await this.checkResult(this.answers);
      this.finished = true;
      this.answerSelected =
        quizz_questions.results[
          finalAnswer as keyof typeof quizz_questions.results
        ];
    }
  }

  async checkResult(anwsers: string[]) {
    const result = anwsers.reduce((previous, current, i, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });

    return result;
  }

  public resetQuizz() {
    this.finished = false;
    this.questionIndex = 0;

    this.questionSelected = this.questions[this.questionIndex];
    this.title = quizz_questions.title;
    this.answers = [];
    this.answerSelected = '';
  }
}
