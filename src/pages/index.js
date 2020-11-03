import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
// import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            (WEB EN CONTRUCCIÓN) Encuentre la vacuna más cercana con VacuMap
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            La app de VacuMap le permitirá ver en que farmacias y hospitales de Barcelona la vacuna ante el Covid-19 está disponible de forma gratuita. 
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Descárgala ya</Button>
          </p>
          <p className="mt-4 text-gray-600">disponible en google play y app store</p>
        </div>
        <div className="lg:w-1/2">
          {/* <HeroImage /> */}
          <img src={require('../svg/img.png')}/>
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Cómo funciona</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Descargue la app</p>
              <p className="mt-4">
                Descargue la app desde cualquier dispositivo android o IOS.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Abra la app</p>
              <p className="mt-4">
                Al abrir la aplicación no tendrá que darse de alta.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">use la app</p>
              <p className="mt-4">
              toda la información de disponibilidad ya estará a su alcance.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Intuitivo</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Con la interfaz de la app de VacuMap es de gran facilidad poder ver la disponibilidad de la vacuna contra el Covid-19 en farmacias y hospitales.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Instantaneo
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Al abrir la app podrás disponer directamente de toda la información sin necesitar darse de alta.
          </p>
        </div>
      }
      secondarySlot={<HeroImage/>}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Actualizado
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          La información de disponibilidad estará actualizada cada dia ya que a diferencia de los humanos, el virus no descansa ni los domingos!
          </p>
        </div>
      }
      secondarySlot={<SvgCharts/>}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Disponible en Barcelona (datos ficticios)</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="98%" secondaryText="Hospitales informando" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="99%" secondaryText="farmacias informando" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="95%" secondaryText="Satisfacción de los usuarios" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">opiniones</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-full text-center">
      <h3 className="text-5xl font-semibold">Haga el primer paso</h3>
      <p className="mt-8 text-xl font-light">
        Encuentra la vacuna ante el covid-19 más cercana. (disponible solo en Barcelona)
      </p>
      <p className="mt-8">
        <Button size="xl">Descargue la app!</Button>
      </p>
    </section>
  </Layout>
);
