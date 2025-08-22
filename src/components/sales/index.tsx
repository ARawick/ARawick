import { CircleDollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarImage } from '../ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

export default function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">Ultimos clientes</CardTitle>
          <CircleDollarSign className="ml-auto w4 h-4" />
        </div>
      </CardHeader>
      <CardDescription>Novos clientes nas últimas 24horas</CardDescription>
      <CardContent>
        <article className="flex items-center gap-2  border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/ARawick.png" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="text-sm sm:text-base font-semibold">Anthony Dev</div>
          <span className="text-[12px] sm:tex-sm text-gray-400">rawick2005@gmail.com</span>
        </article>
        <article className="flex items-center gap-2  border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/hertonk.png" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="text-sm sm:text-base font-semibold">Herton Vilarim</div>
          <span className="text-[12px] sm:tex-sm text-gray-400">hertonk@gmail.com</span>
        </article>
        <article className="flex items-center gap-2  border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/Istivis.png" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="text-sm sm:text-base font-semibold">Istivis Dev</div>
          <span className="text-[12px] sm:tex-sm text-gray-400">thomasstyven@gmail.com</span>
        </article>
      </CardContent>
    </Card>
  );
}
