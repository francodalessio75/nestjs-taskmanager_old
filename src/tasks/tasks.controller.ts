import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { create } from 'domain';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService){}

    // @Get()
    // getTasks(@Query() filterDto:GetTasksFilterDto):Task[]{
    //     if(Object.keys(filterDto).length){
    //         return this.tasksService.getTasksWithFilter(filterDto)
    //     }else{
    //         return this.tasksService.getAllTasks()
    //     }
    // }

    @Get('/:id')
    getTaskById(@Param('id') id:string):Promise<Task>{
       return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto:CreateTaskDto ):Promise<Task>{
        return this.tasksService.createTask(createTaskDto)
    }

    // @Delete('/:id')
    // deleteTaskById(@Param('id') id:string):void{
    //     this.tasksService.deleteTask(id);
    //  }

    // @Patch('/:id/status')
    // updateStatus(
    //     @Param('id') id:string,
    //     @Body('status') status:TaskStatus):Task{
    //     return this.tasksService.updateTaskStatus(id,status );
    //  }
}
