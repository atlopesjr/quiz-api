import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class QuizService {
  constructor(private prisma: PrismaService) {}

  create(createQuizDto: CreateQuizDto) {
    return 'This action adds a new quiz';
  }

  async findAll() {
    const response = await this.prisma.task.findMany({
      include: { answer: true, book: true, grade: true },
    });
    return response.map((i) => ({
      question: i.question,
      grade: i.grade.description,
      book: i.book.description,
      answers: i.answer.map((a) => ({
        answerDescription: a.description,
        isCorrect: a.is_correct,
      })),
    }));
  }

  async findByFilter(book: string, grade: string) {
    const response = await this.prisma.task.findMany({
      where: {
        AND: { book: { description: book }, grade: { description: grade } },
      },
      include: { answer: true, book: true, grade: true },
    });

    return response.map((i) => ({
      question: i.question,
      grade: i.grade.description,
      book: i.book.description,
      answers: i.answer.map((a) => ({
        answerDescription: a.description,
        isCorrect: a.is_correct,
      })),
    }));
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
}
