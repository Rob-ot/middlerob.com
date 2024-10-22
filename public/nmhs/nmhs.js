document.addEventListener('DOMContentLoaded', function () {
  const products = [
    {
      name: 'Non-vented Skirting with Style Crest Vent',
      isVent: true,
      ventedSqInPerFoot: 50,
    },
    {
      name: 'Non-vented Skirting with PlyGem Foundation Vent',
      isVent: true,
      ventedSqInPerFoot: 48,
    },
    {
      name: 'Non-vented Skirting with PlyGem Air Vent',
      isVent: true,
      ventedSqInPerFoot: 18,
    },
    // vents should go above, split them into two sections so they don't have multiple headings in dropdown
    {
      name: 'Eagle Deluxe Vinyl Skirting',
      isVent: false,
      ventedSqInPerFoot: 4.9,
      skirtingPanelWidth: 16,
    },
    {
      name: 'Style Crest Premium Plus Skirting',
      isVent: false,
      ventedSqInPerFoot: 8.4,
      skirtingPanelWidth: 16,
    },
    {
      name: 'Rustique Ribb 16" x 12\' Vented Skirting',
      isVent: false,
      ventedSqInPerFoot: 2.757,
      skirtingPanelWidth: 16,
    },
    {
      name: 'Proguard 16" x 12\' Center Vented Vinyl Skirting',
      isVent: false,
      ventedSqInPerFoot: 4.8,
      skirtingPanelWidth: 16,
    },
    {
      name: 'ABTCO 16" x 12\' Everlock Perforated Skirting',
      isVent: false,
      ventedSqInPerFoot: 15,
      skirtingPanelWidth: 16,
    },
    {
      name: 'ABTCO 16" x 12\' Everlock All-Vent Skirting',
      isVent: false,
      ventedSqInPerFoot: 6.5,
      skirtingPanelWidth: 16,
    },
    {
      name: 'Kaycan 16" x 12\' W.B.P. Vented Skirting',
      isVent: false,
      ventedSqInPerFoot: 9.975,
      skirtingPanelWidth: 16,
    },
    {
      name: 'ABTCO 8" x 12\'6" Beaded Vented Soffit (Brushed Texture)',
      isVent: false,
      ventedSqInPerFoot: 3.15,
      skirtingPanelWidth: 8,
    },
    {
      name: 'ABTCO 10" x 12\' Vented Vinyl Soffit (Woodgrain Texture)',
      isVent: false,
      ventedSqInPerFoot: 3.76,
      skirtingPanelWidth: 10,
    },
    {
      name: 'ABTCO 12" x 12\' Triple 4" Vented Vinyl Soffit (Brushed Texture)',
      isVent: false,
      ventedSqInPerFoot: 12.63,
      skirtingPanelWidth: 12,
    },
    {
      name: 'ABTCO 12" x 12\' Triple 4" Fully Vented Vinyl Soffit (Woodgrain Texture)',
      isVent: false,
      ventedSqInPerFoot: 3.76,
      skirtingPanelWidth: 12,
    },
    {
      name: 'ABTCO 16" x 12\' Vented Soffit (Brushed Texture)',
      isVent: false,
      ventedSqInPerFoot: 6.3,
      skirtingPanelWidth: 16,
    },
    {
      name: 'CertainTeed 6" x 12\'6" Triple 2" Beaded Soffit (Smooth Texture)',
      isVent: false,
      ventedSqInPerFoot: 1.6,
      skirtingPanelWidth: 6,
    },
    {
      name: 'CertainTeed/Ironmax 10" x 12\' Value Double 5" Vented Soffit (Smooth Texture)',
      isVent: false,
      ventedSqInPerFoot: 6.4,
      skirtingPanelWidth: 10,
    },
    {
      name: 'CertainTeed 10" x 12\' Triple 3-1/3 Vented Vinyl Soffit',
      isVent: false,
      ventedSqInPerFoot: 9.65,
      skirtingPanelWidth: 10,
    },
    {
      name: 'CertainTeed 12" x 12\' Universal/Value Triple 4" Fully Vented Vinyl Soffit (Smooth Texture)',
      isVent: false,
      ventedSqInPerFoot: 5.9,
      skirtingPanelWidth: 12,
    },
    {
      name: 'CertainTeed 12" x 12\' Universal/Value Triple 4" Center Vent Soffit (Smooth Texture)',
      isVent: false,
      ventedSqInPerFoot: 2,
      skirtingPanelWidth: 12,
    },
    {
      name: 'CertainTeed Perimeter 10" x 12\' Triple 3-1/3 Hidden Vented Soffit (Smooth Texture)',
      isVent: false,
      ventedSqInPerFoot: 9.5,
      skirtingPanelWidth: 10,
    },
    {
      name: 'PlyGem 11.25" x 12\' Economy Triple 4" Vinyl Soffit',
      isVent: false,
      ventedSqInPerFoot: 5.87,
      skirtingPanelWidth: 11.25,
    },
    {
      name: 'Georgia Pacific 7" x 12\' Beaded Hidden Vent Soffit',
      isVent: false,
      ventedSqInPerFoot: 1.5428,
      skirtingPanelWidth: 7,
    },
    {
      name: 'Georgia Pacific 10" x 12\' Triple 3-1/3" Hidden Vent Soffit',
      isVent: false,
      ventedSqInPerFoot: 7.6277,
      skirtingPanelWidth: 10,
    },
    {
      name: 'Georgia Pacific 12" x 12\' Triple 4" Center Vent Soffit',
      isVent: false,
      ventedSqInPerFoot: 4.78,
      skirtingPanelWidth: 12,
    },
    {
      name: 'Georgia Pacific 12" x 12\' Triple 4" Basketweave Full Vent Soffit',
      isVent: false,
      ventedSqInPerFoot: 14.34,
      skirtingPanelWidth: 12,
    },
    {
      name: 'Kaycan 13" x 12\' W.B.P. Vented Skirting',
      isVent: false,
      ventedSqInPerFoot: 8.1,
      skirtingPanelWidth: 13,
    },
    {
      name: 'Georgia Pacific 12" x 12\' Premium Triple 4" Center Vent Soffit',
      isVent: false,
      ventedSqInPerFoot: 1.956,
      skirtingPanelWidth: 12,
    },
    {
      name: 'Georgia Pacific 12" x 12\' Premium Triple 4" Full Vent Soffit',
      isVent: false,
      ventedSqInPerFoot: 5.867,
      skirtingPanelWidth: 12,
    },
  ]

  const template = `
    <div class="Calc">
      <section class="Calc__sizes">
        <div class="Calc__size">
          <div class="Calc__label">Home Width</div>
          <select class="Calc__home-width-ft"></select>
          <select class="Calc__home-width-in"></select>
        </div>

        <div class="Calc__size">
          <div class="Calc__label">Home Length</div>
          <select class="Calc__home-length-ft"></select>
          <select class="Calc__home-length-in"></select>
        </div>
      </section>

      <section class="Calc__products">
        <div class="Calc__label">Product</div>
        <select class="Calc__product"></select>
      </section>

      <section class="Calc__vapor-barrier">
        <label>
          <input class="Calc__vapor-barrier-option" type="radio" name="vapor-barrier" value="No Vapor Barrier" checked>
          No Vapor Barrier
        </label>
        <label>
          <input class="Calc__vapor-barrier-option" type="radio" name="vapor-barrier" value="Vapor Barrier">
          Vapor Barrier
        </label>
        <div class="Calc__note">Homes set on concrete or homes with a plastic barrier over gravel/dirt require less ventilation.</div>
      </section>

      <div class="Calc__options" style="display: none;">
        <div class="Calc__label">Average Skirting Height</div>
        <select class="Calc__avg-skirting-height"></select>
      </div>

      <div class="Calc__details" style="display: none;">
        <div>
          <span class="Calc__sub-result-label">Unvented Sheets: </span>
          <span class="Calc__sub-result Calc__unvented-sheets"></span>
        </div>
        <div>
          <span class="Calc__sub-result-label">Total Sheets: </span>
          <span class="Calc__sub-result Calc__total-sheets"></span>
        </div>
      </div>

      <div class="Calc__vented-result" style="display: none;">
        <span class="Calc__vented-required-label"></span>
        <span class="Calc__vented-required"></span>
      </div>

      <div class="Calc__unsuitable" style="display: none;">
        <p>This product does not provide suitable ventilation for this home setup based on HUD requirements.</p>
        <p>Choose a different product or consider adding a vapor barrier to your home.</p>
      </div>
    </div>
  `

  function initSkirtingCalculator() {
    const parentElCandidates = document.querySelectorAll('.ins-tile__description')
    const parentEl = Array.prototype.find.call(parentElCandidates, (el) =>
      el.textContent.includes('(--skirting-calculator--)')
    )
    if (!parentEl) return console.error('No parent element found')
    parentEl.innerHTML = template

    const homeWidthFtEl = parentEl.querySelector('.Calc__home-width-ft')
    const homeWidthInEl = parentEl.querySelector('.Calc__home-width-in')
    const homeLengthFtEl = parentEl.querySelector('.Calc__home-length-ft')
    const homeLengthInEl = parentEl.querySelector('.Calc__home-length-in')
    const vaporBarrierRadioEls = parentEl.querySelectorAll('.Calc__vapor-barrier-option')
    const avgSkirtingHeightEl = parentEl.querySelector('.Calc__avg-skirting-height')
    const productDropdownEl = parentEl.querySelector('.Calc__product')
    const sectionSkirtingOptionsEl = parentEl.querySelector('.Calc__options')
    const sectionSkirtingDetailsEl = parentEl.querySelector('.Calc__details')
    const resultVentedRequiredLabelEl = parentEl.querySelector('.Calc__vented-required-label')
    const resultVentedRequiredEl = parentEl.querySelector('.Calc__vented-required')
    const sectionVentedResultEl = parentEl.querySelector('.Calc__vented-result')
    const sectionUnsuitableEl = parentEl.querySelector('.Calc__unsuitable')
    const resultUnventedSheetsEl = parentEl.querySelector('.Calc__unvented-sheets')
    const resultTotalSheetsEl = parentEl.querySelector('.Calc__total-sheets')

    for (let i = 3; i <= 54; i++) {
      homeWidthFtEl.options.add(new Option(`${i} ft`, i))
    }
    homeWidthFtEl.value = '14'
    for (let i = 3; i <= 80; i++) {
      homeLengthFtEl.options.add(new Option(`${i} ft`, i))
    }
    homeLengthFtEl.value = '70'
    for (let i = 0; i <= 11; i++) {
      homeWidthInEl.options.add(new Option(`${i} in`, i))
      homeLengthInEl.options.add(new Option(`${i} in`, i))
    }
    for (let i = 8; i <= 60; i++) {
      avgSkirtingHeightEl.options.add(new Option(`${i} in`, i))
    }
    avgSkirtingHeightEl.value = '24'

    let lastWasVent = null
    products.forEach((product, i) => {
      if (product.isVent !== lastWasVent) {
        // optgroup
        const optgroup = document.createElement('optgroup')
        optgroup.label = product.isVent ? 'Vents' : 'Vented Sheets'
        productDropdownEl.add(optgroup)
        lastWasVent = product.isVent
      }
      productDropdownEl.options.add(new Option(product.name, i.toString()))
    })

    function calculate() {
      const homeWidthFt = parseInt(homeWidthFtEl.value, 10)
      const homeWidthIn = parseInt(homeWidthInEl.value, 10)
      const homeLengthFt = parseInt(homeLengthFtEl.value, 10)
      const homeLengthIn = parseInt(homeLengthInEl.value, 10)
      const vaporBarrierOptionValue = Array.from(vaporBarrierRadioEls).find((el) => el.checked).value
      const avgSkirtingHeightValue = parseInt(avgSkirtingHeightEl.value, 10)
      const productDropdownValue = productDropdownEl.value

      const homeWidthInFeet = homeWidthFt + homeWidthIn / 12
      const homeLengthInFeet = homeLengthFt + homeLengthIn / 12

      const homeSquareFeet = homeWidthInFeet * homeLengthInFeet
      const homeEdgeSize = homeWidthInFeet * 2 + homeLengthInFeet * 2

      const product = products[productDropdownValue]
      const productIsVent = product.isVent
      const productVentedSqInPerFoot = product.ventedSqInPerFoot
      const skirtingPanelWidth = product.skirtingPanelWidth

      const skirtingPanelsRequired = Math.ceil((homeEdgeSize * 12) / skirtingPanelWidth)

      const hasSelectedBarrierOption = !!vaporBarrierOptionValue
      const hasBarrier = vaporBarrierOptionValue === 'Vapor Barrier'
      const ventilationRequirementBarrier = 1500
      const ventilationRequirementNoBarrier = 150
      const ventilationRequirement =
        homeSquareFeet / (hasBarrier ? ventilationRequirementBarrier : ventilationRequirementNoBarrier)

      let numRequired
      let resultIsSuitable
      if (productIsVent) {
        numRequired = Math.round(ventilationRequirement / (productVentedSqInPerFoot / 144))
        if (productIsVent && numRequired < 4) numRequired = 4 // minimum 4 vents per home
        if (productIsVent && numRequired % 2 === 1) numRequired++ // even vents, for symmetry on the home
        resultIsSuitable = true
      } else {
        const skirtingInstalledHeight = avgSkirtingHeightValue / 12
        const sqInPerPanel = productVentedSqInPerFoot * skirtingInstalledHeight
        const sqFtPerPanel = sqInPerPanel / 144
        numRequired = Math.round(ventilationRequirement / sqFtPerPanel)
        resultIsSuitable = numRequired <= skirtingPanelsRequired
      }

      sectionSkirtingOptionsEl.style.display = productDropdownValue && !productIsVent ? 'block' : 'none'
      sectionSkirtingDetailsEl.style.display =
        hasSelectedBarrierOption && resultIsSuitable && productDropdownValue && !productIsVent ? 'block' : 'none'
      sectionVentedResultEl.style.display =
        productDropdownValue && hasSelectedBarrierOption && resultIsSuitable ? 'block' : 'none'
      sectionUnsuitableEl.style.display = productDropdownValue && !resultIsSuitable ? 'block' : 'none'

      resultUnventedSheetsEl.textContent = (skirtingPanelsRequired - numRequired).toString()
      resultTotalSheetsEl.textContent = skirtingPanelsRequired.toString()
      resultVentedRequiredLabelEl.textContent = productIsVent ? 'Vents: ' : 'Vented Sheets: '
      resultVentedRequiredEl.textContent = numRequired.toString()
    }

    document.querySelector('.Calc__home-width-in').addEventListener('change', calculate)
    homeWidthFtEl.addEventListener('change', calculate)
    homeWidthInEl.addEventListener('change', calculate)
    homeLengthFtEl.addEventListener('change', calculate)
    homeLengthInEl.addEventListener('change', calculate)
    vaporBarrierRadioEls.forEach((el) => el.addEventListener('change', calculate))
    avgSkirtingHeightEl.addEventListener('change', calculate)
    productDropdownEl.addEventListener('change', calculate)
    calculate()
  }

  initSkirtingCalculator()
})
