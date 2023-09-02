import InstitutionRegister from '@/app/(auth)/register/institutionRegister';
import MentorRegister from '@/app/(auth)/register/mentorRegister';
import StudentRegister from '@/app/(auth)/register/studentRegister';
import {NextPage} from 'next';

interface Props {
  section: string;
}

const RegisterWrapper: NextPage<Props> = ({section}) => {
  switch (section) {
    case 'student-section':
      return <StudentRegister />;
    case 'mentor-section':
      return <MentorRegister />;
    case 'institution-section':
      return <InstitutionRegister />;

    default:
      return <StudentRegister />;
  }
};

export default RegisterWrapper;
