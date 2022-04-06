const HtmlTemplate =(managerTemplate,engineerTemplate,internTemplate)=>{
   return `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TeamProfile Generator</title>
    <script src="https://cdn.tailwindcss.com"></script>  

    </head>
    <body>
    <header class="bg-orange-400">
    <h1 class="text-3xl font-bold underline m-6 p-6">Team Profile Generator App</h1>
    </header>
    <section class="overflow-hidden text-gray-700 flex">
    ${managerTemplate}
    </section>
    <section class="overflow-hidden text-gray-700 flex">
    ${engineerTemplate}
    </section class="mb-10">
    <section class="overflow-hidden text-gray-700 flex">
    ${internTemplate}
    </section>
    <footer class="text-center text-white bg-orange-400 mt-6">
    <div class="container p-6">
    <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
      <div class="lg:mb-0 mb-6">
      <h6>&copy; Sangeetha.K</h6>
      </div>
     </div>
    </div>
    </footer>
    <script>
    import 'tw-elements';
    </script>
    </body>
</html>
   `
}

module.exports = HtmlTemplate;