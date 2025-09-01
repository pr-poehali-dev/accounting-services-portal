import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isClientFormOpen, setIsClientFormOpen] = useState(false);
  const [isSpecialistFormOpen, setIsSpecialistFormOpen] = useState(false);
  
  const [clientForm, setClientForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: '',
    employees: '',
    services: '',
    budget: '',
    description: ''
  });

  const [specialistForm, setSpecialistForm] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    experience: '',
    education: '',
    certificates: '',
    hourlyRate: '',
    location: '',
    description: ''
  });

  const services = [
    {
      title: 'Ведение бухгалтерского учета',
      description: 'Полное ведение учета доходов и расходов, первичных документов',
      price: 'от 15 000 ₽/мес',
      demand: 'Высокий спрос',
      icon: 'BookOpen'
    },
    {
      title: 'Налоговое планирование',
      description: 'Оптимизация налогообложения в рамках закона',
      price: 'от 25 000 ₽/мес',
      demand: 'Средний спрос',
      icon: 'Calculator'
    },
    {
      title: 'Сдача отчетности',
      description: 'Подготовка и сдача налоговых деклараций и отчетов',
      price: 'от 8 000 ₽/мес',
      demand: 'Высокий спрос',
      icon: 'FileText'
    },
    {
      title: 'Кадровый учет',
      description: 'Ведение кадрового делопроизводства и расчет зарплаты',
      price: 'от 12 000 ₽/мес',
      demand: 'Высокий спрос',
      icon: 'Users'
    },
    {
      title: 'Консультации',
      description: 'Профессиональные консультации по учетным вопросам',
      price: 'от 2 000 ₽/час',
      demand: 'Средний спрос',
      icon: 'MessageCircle'
    },
    {
      title: 'Аудит и проверки',
      description: 'Внутренний аудит и проверка ведения учета',
      price: 'от 5 000 ₽/час',
      demand: 'Низкий спрос',
      icon: 'Search'
    }
  ];

  const specialists = [
    {
      name: 'Анна Петрова',
      specialty: 'Главный бухгалтер',
      experience: '12 лет',
      rating: 4.9,
      completedOrders: 156,
      hourlyRate: '2 500 ₽/час',
      location: 'Москва',
      services: ['Ведение учета', 'Налоги', 'Отчетность'],
      verified: true
    },
    {
      name: 'Михаил Иванов',
      specialty: 'Налоговый консультант',
      experience: '8 лет',
      rating: 4.8,
      completedOrders: 89,
      hourlyRate: '3 000 ₽/час',
      location: 'СПб',
      services: ['Налогообложение', 'Консультации'],
      verified: true
    },
    {
      name: 'Елена Смирнова',
      specialty: 'Аудитор',
      experience: '15 лет',
      rating: 5.0,
      completedOrders: 203,
      hourlyRate: '4 000 ₽/час',
      location: 'Москва',
      services: ['Аудит', 'Проверки', 'Консультации'],
      verified: true
    },
    {
      name: 'Дмитрий Козлов',
      specialty: 'Бухгалтер по МСФО',
      experience: '6 лет',
      rating: 4.7,
      completedOrders: 67,
      hourlyRate: '3 500 ₽/час',
      location: 'Екатеринбург',
      services: ['МСФО', 'Отчетность'],
      verified: false
    }
  ];

  const activeOrders = [
    {
      title: 'Ведение учета для торговой компании',
      company: 'ООО "Прогресс"',
      budget: '30 000 ₽/мес',
      deadline: '3 дня',
      responses: 12,
      description: 'Требуется ведение полного бухгалтерского учета для торговой компании, 25-50 сотрудников',
      requirements: ['Опыт работы от 5 лет', '1С Бухгалтерия', 'Торговый учет'],
      urgent: true
    },
    {
      title: 'Налоговое планирование для IT-компании',
      company: 'ИП Сидоров А.В.',
      budget: '15 000 ₽/мес',
      deadline: '5 дней',
      responses: 8,
      description: 'Оптимизация налогообложения для IT-деятельности, работа на УСН',
      requirements: ['Опыт с IT-сферой', 'УСН', 'Налоговые льготы'],
      urgent: false
    },
    {
      title: 'Восстановление учета с нуля',
      company: 'ООО "Строй-Мастер"',
      budget: '50 000 ₽',
      deadline: '1 неделя',
      responses: 15,
      description: 'Восстановление бухгалтерского учета за 2023 год, подготовка отчетности',
      requirements: ['Опыт восстановления учета', 'Строительная отрасль', 'НДС'],
      urgent: true
    }
  ];

  const handleClientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Client form submitted:', clientForm);
    setIsClientFormOpen(false);
    setClientForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      businessType: '',
      employees: '',
      services: '',
      budget: '',
      description: ''
    });
  };

  const handleSpecialistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Specialist form submitted:', specialistForm);
    setIsSpecialistFormOpen(false);
    setSpecialistForm({
      name: '',
      email: '',
      phone: '',
      specialty: '',
      experience: '',
      education: '',
      certificates: '',
      hourlyRate: '',
      location: '',
      description: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calculator" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">БухУчет.Биржа</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#specialists" className="text-gray-600 hover:text-primary transition-colors">Специалисты</a>
              <a href="#orders" className="text-gray-600 hover:text-primary transition-colors">Заказы</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">Как работаем</a>
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Биржа бухгалтерских услуг
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Найдите опытного бухгалтера или получите новых клиентов. 
              Безопасные сделки, проверенные специалисты, гарантия результата.
            </p>

            {/* User Type Selection */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon name="Search" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ищу бухгалтера</h3>
                  <p className="text-gray-600 mb-6">
                    Найдите профессионального бухгалтера для ведения учета, 
                    составления отчетности или консультаций
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>500+ проверенных специалистов</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Безопасные платежи</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Гарантия качества</span>
                    </div>
                  </div>
                  <Dialog open={isClientFormOpen} onOpenChange={setIsClientFormOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full">
                        Разместить задачу
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Разместить задачу</DialogTitle>
                        <DialogDescription>
                          Расскажите о своих потребностях и получите предложения от специалистов
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleClientSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="client-name">Ваше имя</Label>
                            <Input
                              id="client-name"
                              value={clientForm.name}
                              onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="company">Компания</Label>
                            <Input
                              id="company"
                              value={clientForm.company}
                              onChange={(e) => setClientForm({ ...clientForm, company: e.target.value })}
                              placeholder="ООО, ИП или физ. лицо"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="client-email">Email</Label>
                            <Input
                              id="client-email"
                              type="email"
                              value={clientForm.email}
                              onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="client-phone">Телефон</Label>
                            <Input
                              id="client-phone"
                              type="tel"
                              value={clientForm.phone}
                              onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="business-type">Сфера деятельности</Label>
                            <Select value={clientForm.businessType} onValueChange={(value) => setClientForm({ ...clientForm, businessType: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите сферу" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="trade">Торговля</SelectItem>
                                <SelectItem value="services">Услуги</SelectItem>
                                <SelectItem value="it">IT</SelectItem>
                                <SelectItem value="production">Производство</SelectItem>
                                <SelectItem value="construction">Строительство</SelectItem>
                                <SelectItem value="other">Другое</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="employees">Количество сотрудников</Label>
                            <Select value={clientForm.employees} onValueChange={(value) => setClientForm({ ...clientForm, employees: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите размер" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">Только я</SelectItem>
                                <SelectItem value="2-5">2-5 человек</SelectItem>
                                <SelectItem value="6-20">6-20 человек</SelectItem>
                                <SelectItem value="21-50">21-50 человек</SelectItem>
                                <SelectItem value="50+">Более 50</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="services">Нужные услуги</Label>
                          <Input
                            id="services"
                            value={clientForm.services}
                            onChange={(e) => setClientForm({ ...clientForm, services: e.target.value })}
                            placeholder="Например: ведение учета, сдача отчетности"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="budget">Бюджет</Label>
                          <Select value={clientForm.budget} onValueChange={(value) => setClientForm({ ...clientForm, budget: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите бюджет" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5000-10000">5 000 - 10 000 ₽</SelectItem>
                              <SelectItem value="10000-20000">10 000 - 20 000 ₽</SelectItem>
                              <SelectItem value="20000-35000">20 000 - 35 000 ₽</SelectItem>
                              <SelectItem value="35000-50000">35 000 - 50 000 ₽</SelectItem>
                              <SelectItem value="50000+">Более 50 000 ₽</SelectItem>
                              <SelectItem value="hourly">Почасовая оплата</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="client-description">Описание задачи</Label>
                          <Textarea
                            id="client-description"
                            value={clientForm.description}
                            onChange={(e) => setClientForm({ ...clientForm, description: e.target.value })}
                            placeholder="Подробно опишите что нужно сделать, какие есть особенности..."
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          Разместить задачу
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon name="Briefcase" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Предлагаю услуги</h3>
                  <p className="text-gray-600 mb-6">
                    Зарегистрируйтесь как специалист и получайте заказы 
                    от компаний, которые нуждаются в ваших услугах
                  </p>
                  <div className="space-y-3 text-sm text-gray-500 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>1200+ активных заказов</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Стабильный заработок</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Прозрачные условия</span>
                    </div>
                  </div>
                  <Dialog open={isSpecialistFormOpen} onOpenChange={setIsSpecialistFormOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full" variant="outline">
                        Стать исполнителем
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Регистрация специалиста</DialogTitle>
                        <DialogDescription>
                          Заполните профиль и начните получать заказы уже сегодня
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSpecialistSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="spec-name">Полное имя</Label>
                          <Input
                            id="spec-name"
                            value={specialistForm.name}
                            onChange={(e) => setSpecialistForm({ ...specialistForm, name: e.target.value })}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="spec-email">Email</Label>
                            <Input
                              id="spec-email"
                              type="email"
                              value={specialistForm.email}
                              onChange={(e) => setSpecialistForm({ ...specialistForm, email: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="spec-phone">Телефон</Label>
                            <Input
                              id="spec-phone"
                              type="tel"
                              value={specialistForm.phone}
                              onChange={(e) => setSpecialistForm({ ...specialistForm, phone: e.target.value })}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="specialty">Специализация</Label>
                            <Select value={specialistForm.specialty} onValueChange={(value) => setSpecialistForm({ ...specialistForm, specialty: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите специализацию" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bookkeeper">Бухгалтер</SelectItem>
                                <SelectItem value="chief-accountant">Главный бухгалтер</SelectItem>
                                <SelectItem value="tax-consultant">Налоговый консультант</SelectItem>
                                <SelectItem value="auditor">Аудитор</SelectItem>
                                <SelectItem value="hr-specialist">Кадровик</SelectItem>
                                <SelectItem value="financial-analyst">Финансовый аналитик</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="experience">Опыт работы</Label>
                            <Select value={specialistForm.experience} onValueChange={(value) => setSpecialistForm({ ...specialistForm, experience: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите опыт" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-3">1-3 года</SelectItem>
                                <SelectItem value="3-5">3-5 лет</SelectItem>
                                <SelectItem value="5-10">5-10 лет</SelectItem>
                                <SelectItem value="10+">Более 10 лет</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="education">Образование</Label>
                          <Input
                            id="education"
                            value={specialistForm.education}
                            onChange={(e) => setSpecialistForm({ ...specialistForm, education: e.target.value })}
                            placeholder="Например: Финансовый университет, экономист"
                          />
                        </div>

                        <div>
                          <Label htmlFor="certificates">Сертификаты</Label>
                          <Input
                            id="certificates"
                            value={specialistForm.certificates}
                            onChange={(e) => setSpecialistForm({ ...specialistForm, certificates: e.target.value })}
                            placeholder="1С: Бухгалтерия, ACCA и др."
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="hourly-rate">Почасовая ставка (₽)</Label>
                            <Input
                              id="hourly-rate"
                              type="number"
                              value={specialistForm.hourlyRate}
                              onChange={(e) => setSpecialistForm({ ...specialistForm, hourlyRate: e.target.value })}
                              placeholder="2000"
                            />
                          </div>
                          <div>
                            <Label htmlFor="location">Город</Label>
                            <Input
                              id="location"
                              value={specialistForm.location}
                              onChange={(e) => setSpecialistForm({ ...specialistForm, location: e.target.value })}
                              placeholder="Москва"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="spec-description">О себе</Label>
                          <Textarea
                            id="spec-description"
                            value={specialistForm.description}
                            onChange={(e) => setSpecialistForm({ ...specialistForm, description: e.target.value })}
                            placeholder="Расскажите о своем опыте, навыках и преимуществах..."
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          Создать профиль
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-primary">2,500+</div>
                <div className="text-gray-600">Выполненных задач</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Активных специалистов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Популярные услуги</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Самые востребованные бухгалтерские услуги на нашей платформе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <Badge variant={service.demand === 'Высокий спрос' ? 'default' : service.demand === 'Средний спрос' ? 'secondary' : 'outline'}>
                      {service.demand}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
                  <Button variant="outline" className="w-full">
                    Найти специалиста
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
              Проверенные бухгалтеры с высоким рейтингом и множеством выполненных заказов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialists.map((specialist, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                      <Icon name="User" size={32} className="text-gray-500" />
                    </div>
                    {specialist.verified && (
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg">{specialist.name}</CardTitle>
                  <CardDescription className="text-sm">{specialist.specialty}</CardDescription>
                  <div className="text-sm text-gray-500">{specialist.location}</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Рейтинг:</span>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{specialist.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Заказов:</span>
                    <span className="font-medium">{specialist.completedOrders}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Опыт:</span>
                    <span className="font-medium">{specialist.experience}</span>
                  </div>
                  <div className="text-center py-2">
                    <div className="text-lg font-bold text-primary">{specialist.hourlyRate}</div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {specialist.services.slice(0, 2).map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">{service}</Badge>
                    ))}
                    {specialist.services.length > 2 && (
                      <Badge variant="outline" className="text-xs">+{specialist.services.length - 2}</Badge>
                    )}
                  </div>
                  <Button className="w-full" size="sm">
                    <Icon name="MessageCircle" size={14} className="mr-1" />
                    Написать
                  </Button>
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

      {/* Active Orders Section */}
      <section id="orders" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Активные заказы</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные задачи от компаний, которые ищут бухгалтерские услуги
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeOrders.map((order, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg leading-tight">{order.title}</CardTitle>
                    {order.urgent && <Badge variant="destructive">Срочно</Badge>}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{order.company}</div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-2xl font-bold text-primary">{order.budget}</div>
                    <div className="text-gray-500">до {order.deadline}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{order.description}</p>
                  
                  <div>
                    <div className="text-sm font-medium mb-2">Требования:</div>
                    <div className="flex flex-wrap gap-1">
                      {order.requirements.map((req, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{req}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon name="Users" size={16} />
                      <span>{order.responses} откликов</span>
                    </div>
                    <Button size="sm">
                      <Icon name="Send" size={14} className="mr-1" />
                      Откликнуться
                    </Button>
                  </div>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Как это работает</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой и безопасный процесс сотрудничества
            </p>
          </div>

          <Tabs defaultValue="client" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="client">Для клиентов</TabsTrigger>
              <TabsTrigger value="specialist">Для специалистов</TabsTrigger>
            </TabsList>
            
            <TabsContent value="client" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="PlusCircle" size={32} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">1. Создайте задачу</h4>
                    <p className="text-gray-600 text-sm">
                      Опишите что нужно сделать, укажите бюджет и сроки
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">2. Выберите исполнителя</h4>
                    <p className="text-gray-600 text-sm">
                      Получите предложения и выберите подходящего специалиста
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CheckCircle" size={32} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">3. Получите результат</h4>
                    <p className="text-gray-600 text-sm">
                      Работайте с исполнителем и получите качественный результат
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="specialist" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="UserPlus" size={32} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">1. Создайте профиль</h4>
                    <p className="text-gray-600 text-sm">
                      Заполните информацию о себе и своих навыках
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Search" size={32} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">2. Ищите заказы</h4>
                    <p className="text-gray-600 text-sm">
                      Просматривайте задачи и откликайтесь на подходящие
                    </p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="DollarSign" size={32} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">3. Зарабатывайте</h4>
                    <p className="text-gray-600 text-sm">
                      Выполняйте заказы и получайте стабильный доход
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Начните уже сегодня</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к тысячам довольных пользователей нашей платформы
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Найти специалиста
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary">
              Стать исполнителем
            </Button>
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
                <h4 className="text-xl font-bold">БухУчет.Биржа</h4>
              </div>
              <p className="text-gray-400">
                Современная платформа для поиска бухгалтерских услуг и специалистов
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Для клиентов</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Найти специалиста</li>
                <li>Разместить задачу</li>
                <li>Гарантии</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Для специалистов</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Стать исполнителем</li>
                <li>Найти заказы</li>
                <li>Тарифы</li>
                <li>Обучение</li>
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
            <p>&copy; 2024 БухУчет.Биржа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;