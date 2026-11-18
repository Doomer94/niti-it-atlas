---
schema: niti/v1
kind: event
id: unix-c
title: Ядро Unix переписывают на C
date:
  start: "1973"
  end: null
  precision: year
  basis: version
topics:
  - os
  - lang
people:
  - dennis-ritchie
  - ken-thompson
organizations:
  - bell-labs
status: draft
sources:
  - ritchie-unix-evolution
---

# Ядро Unix переписывают на C

## Кратко

Ядро Unix переписывают преимущественно на языке C.

## Задача

Как развивать системное ПО с меньшей зависимостью от ассемблера конкретной машины?

## Значение

Новая реализация облегчает дальнейшее развитие и переносы системы.

## Примечание

Переписывание не означает немедленную переносимость на любое оборудование: аппаратно-зависимые части сохраняются.
