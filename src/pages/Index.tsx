import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      title: 'Ведение бухгалтерии',
      description: 'Полное ведение бухгалтерского учета для малого и среднего бизнеса',
      price: 'от 15 000 ₽/мес',
      icon: 'Calculator'
    },
    {
      title: 'Налоговое планирование',
      description: 'Оптимизация налогообложения в рамках действующего законодательства',
      price: 'от 25 000 ₽/мес',
      icon: 'PieChart'
    },
    {
      title: 'Кадровый учет',
      description: 'Ведение кадрового делопроизводства и расчет заработной платы',
      price: 'от 10 000 ₽/мес',
      icon: 'Users'
    },
    {
      title: 'Аудит и консультации',
      description: 'Проведение аудита и консультации по бухгалтерским вопросам',
      price: 'от 5 000 ₽/час',
      icon: 'Search'
    }
  ];

  const specialists = [
    {
      name: 'Анна Петрова',
      specialty: 'Главный бухгалтер',
      experience: '12 лет опыта',
      rating: '4.9',
      price: '2 500 ₽/час',
      avatar: '/placeholder.svg'
    },
    {
      name: 'Михаил Иванов',
      specialty: 'Налоговый консультант',
      experience: '8 лет опыта',
      rating: '4.8',
      price: '3 000 ₽/час',
      avatar: '/placeholder.svg'
    },
    {
      name: 'Елена Смирнова',
      specialty: 'Аудитор',
      experience: '15 лет опыта',
      rating: '5.0',
      price: '4 000 ₽/час',
      avatar: '/placeholder.svg'
    }
  ];

  const clients = [
    {
      company: 'ООО "Прогресс"',
      industry: 'Торговля',
      employees: '25-50 сотрудников',
      budget: '30 000 ₽/мес',
      requirements: 'Полное ведение бухгалтерии, налоговое планирование'
    },
    {
      company: 'ИП Сидоров А.В.',
      industry: 'IT-услуги',
      employees: '1-5 сотрудников',
      budget: '15 000 ₽/мес',
      requirements: 'Ведение учета, подготовка отчетности'
    },
    {
      company: 'ООО "Строй-Мастер"',
      industry: 'Строительство',
      employees: '50-100 сотрудников',
      budget: '50 000 ₽/мес',
      requirements: 'Полный бухгалтерский учет, кадровый учет'
    }
  ];

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation form submitted:', consultationForm);
    setIsConsultationOpen(false);
    setConsultationForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calculator" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">БухУчет.Про</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#specialists" className="text-gray-600 hover:text-primary transition-colors">Специалисты</a>
              <a href="#clients" className="text-gray-600 hover:text-primary transition-colors">Заказчики</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Войти</Button>
              <Button>Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Найдите лучшего<br />
              <span className="text-primary">бухгалтера</span> для вашего бизнеса
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Профессиональные бухгалтерские услуги для предпринимателей. 
              Более 500 сертифицированных специалистов готовы помочь вам.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="px-8 py-3 text-lg">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Записаться на консультацию
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Запись на консультацию</DialogTitle>
                    <DialogDescription>
                      Заполните форму и мы свяжемся с вами в течение 30 минут
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleConsultationSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input
                          id="name"
                          value={consultationForm.name}
                          onChange={(e) => setConsultationForm({ ...consultationForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={consultationForm.phone}
                          onChange={(e) => setConsultationForm({ ...consultationForm, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={consultationForm.email}
                        onChange={(e) => setConsultationForm({ ...consultationForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Интересующая услуга</Label>
                      <Input
                        id="service"
                        value={consultationForm.service}
                        onChange={(e) => setConsultationForm({ ...consultationForm, service: e.target.value })}
                        placeholder="Например: ведение бухгалтерии"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Дополнительная информация</Label>
                      <Textarea
                        id="message"
                        value={consultationForm.message}
                        onChange={(e) => setConsultationForm({ ...consultationForm, message: e.target.value })}
                        placeholder="Расскажите о вашем бизнесе и потребностях"
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить заявку</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                <Icon name="Search" size={20} className="mr-2" />
                Найти специалиста
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Специалистов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1200+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-gray-600">Положительных отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр бухгалтерских услуг для бизнеса любого размера
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Топ специалисты</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Сертифицированные бухгалтеры с многолетним опытом работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((specialist, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-gray-500" />
                  </div>
                  <CardTitle>{specialist.name}</CardTitle>
                  <CardDescription>{specialist.specialty}</CardDescription>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{specialist.rating}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{specialist.experience}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-lg font-semibold text-primary mb-4">{specialist.price}</div>
                  <Button className="w-full mb-2">Связаться</Button>
                  <Button variant="outline" className="w-full">Профиль</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Посмотреть всех специалистов
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Активные заказы</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Компании, которые ищут бухгалтерские услуги прямо сейчас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{client.company}</CardTitle>
                    <Badge variant="secondary">{client.industry}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Icon name="Users" size={16} />
                    {client.employees}
                  </div>
                  <div className="text-lg font-semibold text-primary">{client.budget}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{client.requirements}</p>
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Откликнуться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Посмотреть все заказы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Готовы начать работу?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к нашей платформе и найдите идеального партнера для ведения бухгалтерии
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Найти специалиста
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary">
              Разместить заказ
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h3>
              <p className="text-xl text-gray-600">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Телефон</h4>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-gray-600">info@buhuchet.pro</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Офис</h4>
                  <p className="text-gray-600">Москва, ул. Примерная, 123</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Calculator" size={24} />
                <h4 className="text-xl font-bold">БухУчет.Про</h4>
              </div>
              <p className="text-gray-400">
                Профессиональная платформа для поиска бухгалтерских услуг
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Ведение бухгалтерии</li>
                <li>Налоговое планирование</li>
                <li>Кадровый учет</li>
                <li>Аудит</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Вакансии</li>
                <li>Блог</li>
                <li>Пресс-центр</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Центр помощи</li>
                <li>Контакты</li>
                <li>Правила</li>
                <li>Конфиденциальность</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 БухУчет.Про. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;