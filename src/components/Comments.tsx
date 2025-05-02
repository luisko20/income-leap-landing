
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type CommentProps = {
  name: string;
  image: string;
  comment: string;
  time: string;
  likes: number;
};

const Comment = ({ name, image, comment, time, likes }: CommentProps) => {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-200">
      <Avatar className="w-10 h-10">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-gray-100 rounded-xl p-3">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-700 mt-1">{comment}</p>
        </div>
        <div className="flex gap-4 text-sm text-gray-500 mt-1">
          <button className="hover:text-brand-blue">Curtir</button>
          <button className="hover:text-brand-blue">Responder</button>
          <span>{time}</span>
        </div>
      </div>
      <div className="flex items-start text-sm text-gray-500">
        <span className="mr-1">{likes}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
      </div>
    </div>
  );
};

const Comments = () => {
  // Generating random but realistic times and likes
  const getRandomTime = () => {
    const times = ['2 min', '15 min', '30 min', '1 h', '3 h', '5 h', '8 h', '12 h'];
    return times[Math.floor(Math.random() * times.length)];
  };

  const getRandomLikes = () => {
    return Math.floor(Math.random() * 50) + 1;
  };

  const comments = [
    {
      name: 'Joana Silva',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      comment: 'Comecei sem acreditar muito, mas em menos de uma semana já vi os resultados! Muito grata por essa oportunidade.',
      time: getRandomTime(),
      likes: getRandomLikes()
    },
    {
      name: 'Carlos Mendes',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      comment: 'Recebi meu primeiro pagamento ontem! Já recomendei para meus amigos.',
      time: getRandomTime(),
      likes: getRandomLikes()
    },
    {
      name: 'Ana Paula Souza',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      comment: 'É simples de usar e realmente funciona. Estou conseguindo uma renda extra todo mês!',
      time: getRandomTime(),
      likes: getRandomLikes()
    },
    {
      name: 'Marcos Tavares',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      comment: 'Confesso que achei que era golpe no começo, mas testei e funcionou mesmo. Top demais!',
      time: getRandomTime(),
      likes: getRandomLikes()
    },
    {
      name: 'Fernanda Lima',
      image: 'https://randomuser.me/api/portraits/women/54.jpg',
      comment: 'Já tentei várias coisas antes, mas essa foi a única que deu certo de verdade.',
      time: getRandomTime(),
      likes: getRandomLikes()
    }
  ];

  return (
    <div className="max-w-3xl mx-auto my-12 bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-brand-blue">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Comentários ({comments.length})
      </h3>
      
      <div className="space-y-1">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            image={comment.image}
            comment={comment.comment}
            time={comment.time}
            likes={comment.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
