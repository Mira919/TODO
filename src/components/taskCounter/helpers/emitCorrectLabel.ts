import { Status } from '../../createTaskForm/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectLabel = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.todo:
      return `К выполнению`;
    case Status.inProgress:
      return 'В процессе';
    case Status.completed:
      return 'Завершено';
  }
};
